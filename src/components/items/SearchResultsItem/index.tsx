import { TProductInfo } from "@types";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { formatCurrency } from "@utils/utils";
import shippingIcon from "@assets/images/ic_shipping@2x.png";

export default function SearchResultsItem({
  city,
  free_shipping,
  id,
  picture,
  price,
  title,
}: TProductInfo) {
  return (
    <Link key={id} to={`/items/${id}`} className={style.product__item}>
      <div className={style.product__image}>
        <img src={picture} alt={title} />
      </div>
      <div className={style.product__info}>
        <div className={style.product__price_container}>
          <span className={`${style.product__price} currency`}>
            {formatCurrency(price.amount, price.currency, false)}
            {price.decimals ? <sup>{price.decimals}</sup> : null}
          </span>
          {free_shipping ? (
            <img src={shippingIcon} alt="Free shipping" />
          ) : null}
        </div>
        <h2 className={style.product__title}>{title}</h2>
      </div>
      <div className={style.product__location}>{city}</div>
    </Link>
  );
}
