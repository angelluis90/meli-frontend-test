import fetch from "node-fetch";
import { Application, Request, Response } from "express";
import { getPrice } from "../../utils/utils.ts";
import {
  AUTHOR_INFO,
  MELI_API_CATEGORIES,
  MELI_API_DETAILS,
  MELI_API_SEARCH,
} from "../../utils/constants.ts";
import {
  TMELIProductDescription,
  TProductInfoDetails,
  TMELISearchResult,
  TMELIProductDetails,
  TApiResponseDetails,
  TApiResponseSearch,
  TProductInfoWithCategory,
  TMELICategory,
} from "@types";

const searchProducts = async (
  search: string
): Promise<TProductInfoWithCategory[] | null> => {
  const url = `${MELI_API_SEARCH}?q=${encodeURIComponent(search)}`;
  const response = await fetch(url, {
    method: "GET",
  });
  const results = await response.json();
  if (!results || Object.keys(results).join().includes("error")) return null;

  return (results as TMELISearchResult).results
    .slice(0, 4)
    .map(
      ({
        condition,
        shipping: { free_shipping },
        id,
        thumbnail: picture,
        title,
        price: numberPrice,
        seller_address: { city },
        currency_id: currency,
        category_id,
      }): TProductInfoWithCategory => {
        const price = getPrice(numberPrice, currency);
        return {
          id,
          city: city.name,
          price,
          title,
          picture,
          condition,
          free_shipping,
          category_id,
        };
      }
    ) as TProductInfoWithCategory[];
};

const getProductDetails = async (
  pId: string
): Promise<TMELIProductDetails | null> => {
  const response = await fetch(`${MELI_API_DETAILS}/${pId}`, { method: "GET" });
  const results = await response.json();

  if (!results || Object.keys(results).join().includes("error")) return null;

  return results as TMELIProductDetails;
};

const getProductDescription = async (
  id: string
): Promise<TMELIProductDescription | null> => {
  const response = await fetch(`${MELI_API_DETAILS}/${id}/description`, {
    method: "GET",
  });
  const results = await response.json();

  if (!results || Object.keys(results).join().includes("error")) return null;

  return results as TMELIProductDescription;
};

const getCategoriesArray = async (categoryId: string) => {
  const response = await fetch(`${MELI_API_CATEGORIES}/${categoryId}`, {
    method: "GET",
  });

  const results = await response.json();

  if (!results || Object.keys(results).join().includes("error")) return [];

  return (results as TMELICategory).path_from_root.map((path) => path.name);
};

const getCategoriesByResults = async (
  items: TProductInfoWithCategory[]
): Promise<string[]> => {
  const categories: Record<string, number> = {};
  for (let i = 0; i < items.length; i++) {
    const { category_id: ci } = items[i];
    if (!categories[ci]) categories[ci] = 1;
    else categories[ci]++;
  }

  const [mostRepeated] = Object.entries(categories).sort((i1, i2) =>
    i1[1] > i2[1] ? -1 : 1
  )[0];

  return getCategoriesArray(mostRepeated);
};

export const loadApiEndpoints = (app: Application): void => {
  // Local API to get the details for a giving product
  app.get("/api/items/:id", async (req: Request, res: Response) => {
    const productID = req.params.id;

    // TODO: Error response
    if (!productID)
      return res.status(400).json({ error: "The ID is required" });

    const details = await getProductDetails(`${productID}`);
    const description = await getProductDescription(`${productID}`);

    if (!details)
      return res.status(400).json({
        error: "There was a problem getting the details of that product!",
      });

    const {
      id,
      price,
      title,
      thumbnail: picture,
      condition,
      sold_quantity,
      shipping: { free_shipping },
      seller_address: { city },
      currency_id: currency,
      category_id
    } = details as TMELIProductDetails;

    const categories = await getCategoriesArray(category_id);

    const { plain_text = "", text = "" } =
      (description as TMELIProductDescription) ?? {};

    const item: TProductInfoDetails = {
      id,
      price: getPrice(price, currency),
      title,
      picture,
      condition,
      sold_quantity,
      free_shipping,
      city: city.name,
      description: text !== "" ? text : plain_text,
    };

    return res.status(200).json({
      author: AUTHOR_INFO,
      categories,
      item,
    } as TApiResponseDetails);
  });

  // Local API to return a list of 4 products that matches the giving query parameter
  app.get("/api/items", async (req: Request, res: Response) => {
    const search = req.query.q;
    if (!search || search === "undefined")
      return res
        .status(400)
        .json({ error: "You have to provide something to search!" });

    const results = await searchProducts(`${search}`);
    if (!results)
      return res
        .status(400)
        .json({ error: "There was a problem getting the results!" });

    const categories = await getCategoriesByResults(results);

    return res.status(200).json({
      author: AUTHOR_INFO,
      categories,
      items: results,
    } as TApiResponseSearch);
  });
};
