import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "@utils/constants";
import SkeletonProduct from "@components/elements/SkeletonProduct";
import ErrorMessage from "@components/global/ErrorMessage";
import { TApiResponseDetails, TProductInfoDetails } from "@types";
import ProductDetailItem from "@src/components/items/ProductDetailItem";
import useCategories from "@src/store/categories";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState<TProductInfoDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const setCategories = useCategories((state) => state.setCategories);
  const setCategoriesLoading = useCategories((state) => state.setIsLoading);

  const getDetails = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    setCategoriesLoading(true);
    fetch(`${API_URL}/items/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then(({ item, categories }: TApiResponseDetails) => {
        if (categories) {
          setCategories(categories);
          setCategoriesLoading(false);
        }
        if (item) setData(item);
        else setHasError(true);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    <>
      <div className="page__content product__details w-full">
        {isLoading ? <SkeletonProduct /> : null}
        {!isLoading && data ? <ProductDetailItem {...data} /> : null}
      </div>
      <ErrorMessage show={hasError} type="error">
        No fue posible encontrar la información solicitada
      </ErrorMessage>
    </>
  );
}
