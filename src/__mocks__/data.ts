import { TProductInfoDetails, TProductInfo } from "@src/types";
import { API_URL } from "@utils/constants";

const ProductInfoData: TProductInfo = {
  city: "City",
  free_shipping: true,
  id: "MELI123",
  picture: "item.jpg",
  price: {
    amount: 10000,
    currency: "ARS",
    decimals: "99",
  },
  title: "Product Item",
  condition: "new",
};

const ProductDetailsData: TProductInfoDetails = {
  ...ProductInfoData,
  sold_quantity: 100,
  title: "Title",
  description: "",
};

export { API_URL, ProductDetailsData, ProductInfoData };
