import useCategories from "@src/store/categories";
import { TApiResponseSearch, TProductInfo } from "@types";
import { API_URL } from "@src/utils/constants";
import useGetData from "./useGetData";
import { useCallback, useEffect, useState } from "react";

export default function useSearch(search?: string) {
  const { setCategories } = useCategories();
  const { getData, loading } = useGetData<TApiResponseSearch>();

  const [result, setResult] = useState<TProductInfo[] | null>(null);
  const [error, setError] = useState<string>("");

  const getResults = useCallback(async () => {
    const { data, error, status } = await getData(
      `${API_URL}/items?q=${search}`,
      { method: "GET" }
    );
    if (status === "error") {
      setError(error)
      return;
    }
    const { categories = [], items = [] } = data ?? {};
    setCategories(categories);
    setResult(items);
  }, [getData, search, setCategories]);

  useEffect(() => {
    if (!search) return;
    getResults();
  }, [getResults, search]);

  return { result, loading, error };
}
