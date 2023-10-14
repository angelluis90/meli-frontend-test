import { useSearchParams } from "react-router-dom";
import SkeletonSearchResults from "@components/elements/SkeletonSearchResults";
import SearchResultsItem from "@src/components/items/SearchResultsItem";
import useSearch from "@src/hooks/useSearch";

export default function SearchResultsPage() {
  const [params] = useSearchParams();
  const search = params.get("search")?.trim();
  const { loading, result, error } = useSearch(search);

  if (loading) return <SkeletonSearchResults />;
  if (error) return <h3 className="bg-red-400 p-3 w-full rounded">{error}</h3>;
  if (!result || result.length === 0)
    return (
      <h3 className="bg-blue-200 p-3 w-full rounded">
        No se encontraron resultados para su búsqueda
      </h3>
    );

  return (
    <div className="page__content search__page !p-4">
      <h1 className="sr-only">Resultado de la búsqueda</h1>
      {result.map((item) => (
        <SearchResultsItem key={item.id} {...item} />
      ))}
    </div>
  );
}
