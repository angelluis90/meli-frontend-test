import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_URL } from "@utils/constants";
import SkeletonSearchResults from "@components/elements/SkeletonSearchResults";
import ErrorMessage from "@components/global/ErrorMessage";
import { TApiResponseSearch, TProductInfo } from "@types";
import SearchResultsItem from "@src/components/items/SearchResultsItem";
import useCategories from "@src/store/categories";

export default function SearchResultsPage() {
  const [params] = useSearchParams();
  const [items, setItems] = useState<TProductInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const setCategories = useCategories((state) => state.setCategories);
  const setCategoriesLoading = useCategories((state) => state.setIsLoading);

  const getResults = useCallback(async (): Promise<void> => {
    const search = params.get("search")?.trim();
    setIsLoading(true);
    setHasError(false);
    setCategoriesLoading(true);
    fetch(`${API_URL}/items?q=${search}`, { method: "GET" })
      .then((response) => response.json())
      .then(({ items, categories }: TApiResponseSearch) => {
        if (categories) {
          setCategories(categories);
          setCategoriesLoading(false);
        }
        if (items) setItems(items);
        else setHasError(true);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params, setCategories]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  return (
    <>
      {/* {!isLoading ? (
        <Breadcrumbs elements={categories} />
      ) : (
        <SkeletonBreadcrumbs />
      )} */}
      <div className="page__content search__page !p-4">
        <h1 className="sr-only">Resultado de la búsqueda</h1>
        {isLoading ? <SkeletonSearchResults /> : null}
        {!isLoading
          ? items?.map((item) => <SearchResultsItem key={item.id} {...item} />)
          : null}
      </div>
      <ErrorMessage show={hasError} type="error">
        No fue posible encontrar la información solicitada
      </ErrorMessage>
    </>
  );
}
