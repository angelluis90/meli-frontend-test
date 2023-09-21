import { TProductInfoDetails } from "@types";
import style from "./style.module.scss";
import { formatCurrency } from "@src/utils/utils";

export default function ProductDetailItem({
  condition,
  description,
  id,
  picture,
  price: { amount, currency, decimals },
  sold_quantity,
  title,
}: TProductInfoDetails) {
  return (
    <div id={id} className={style.product__container}>
      <div className={style.product__image}>
        <img src={picture} alt={title} />
      </div>
      <div className={style.product__info}>
        <p className="product__stats text-[14px] mb-4 stats">
          <span className="capitalize">{condition}</span> -{" "}
          <span>{sold_quantity} vendidos</span>
        </p>
        <h1 className="product__title text-[24px] font-bold mb-8">{title}</h1>
        <p className="product__price currency text-[46px] mb-8 whitespace-nowrap">
          {formatCurrency(amount, currency, false)}
          {decimals ? <sup>{decimals}</sup> : null}
        </p>
        <button className="bg-secondary h-10 w-full rounded text-white max-w-[246px] hover:bg-dark-primary focus-visible:bg-dark-primary focus-visible:shadow-lg outline-none">
          Comprar
        </button>
      </div>
      <div className={style.product__description}>
        <h2>Descripción del producto</h2>
        <pre>{description}</pre>
      </div>
    </div>
  );
}
