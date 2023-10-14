import { useParams } from "react-router-dom";
import useDetails from "@src/hooks/useDetails";
import SkeletonProduct from "@components/elements/SkeletonProduct";
import ProductDetailItem from "@src/components/items/ProductDetailItem";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { loading, details, error } = useDetails(id ?? "");

  if (loading) return <SkeletonProduct />;
  if (error) return <h3 className="bg-red-400 p-3 w-full rounded">{error}</h3>;
  if (!details)
    return (
      <h3 className="bg-blue-200 p-3 w-full rounded">
        No se encontraron resultados para su búsqueda
      </h3>
    );

  return (
    <div className="page__content product__details w-full">
      <ProductDetailItem {...details} />
    </div>
  );
}
