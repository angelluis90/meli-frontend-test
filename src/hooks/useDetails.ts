import useCategories from "@src/store/categories";
import { TApiResponseDetails, TProductInfoDetails } from "@types";
import { API_URL } from "@src/utils/constants";
import { useCallback, useEffect, useState } from "react";
import useGetData from "./useGetData";

export default function useDetails(id: string) {
  const { setCategories } = useCategories();
  const { getData, loading } = useGetData<TApiResponseDetails>();

  const [details, setDetails] = useState<TProductInfoDetails | null>(null);
  const [error, setError] = useState("");

  const getDetails = useCallback(
    async (id: string) => {
      const { data, error, status } = await getData(`${API_URL}/items/${id}`, {
        method: "GET",
      });

      if (status === "error") {
        setError(error);
        return;
      }

      const { categories = [], item } = data ?? {};
      setDetails(item as TProductInfoDetails);
      setCategories(categories);
    },
    [getData, setCategories]
  );

  useEffect(() => {
    if (!id) return;
    getDetails(id);
  }, [id, getDetails]);

  return { details, error, loading };
}
