import { HTMLAttributes } from "react";
import meliLogo from "@assets/images/Logo_ML.png";
import meliLogo2x from "@assets/images/Logo_ML@2x.png";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import SearchBox from "@components/elements/SearchBox";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export default function Header({ className, ...rest }: HeaderProps) {
  return (
    <header className={`${style.header} ${className ?? ""}`} {...rest}>
      <div className={style.hContainer}>
        <Link to={"/"}>
          <picture>
            <source media="(max-width: 799px)" srcSet={meliLogo} />
            <source media="(min-width: 800px)" srcSet={meliLogo2x} />
            <img
              src={meliLogo2x}
              alt="Mercado Libre logo"
              className={style.hLogo}
            />
          </picture>
        </Link>
        <SearchBox />
      </div>
    </header>
  );
}
