import { Response } from "@types";
import { useCallback, useState } from "react";

export default function useGetData<T>() {
  const [loading, setLoading] = useState(false);

  const getData = useCallback(
    async (url: string, params?: RequestInit): Promise<Response<T>> => {
      setLoading(true);
      try {
        const response = await fetch(url, params);
        const result = await response.json();
        return {
          status: "success",
          data: result,
          error: "",
        };
      } catch (error) {
        return {
          status: "error",
          data: null,
          error:
            "Lo sentimos. Ha ocurrido un error cargando la información solicitada.",
        };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    getData,
    loading,
  };
}
