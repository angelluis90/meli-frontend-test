import { FormEvent, useCallback, useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import { useSubmit, useLocation } from "react-router-dom";
import iconSearch from "@assets/images/ic_Search.png";
import iconSearch2x from "@assets/images/ic_Search@2x.png";
import style from "./style.module.scss";
import { encodeHTML } from "@utils/utils";

export default function SearchBox() {
  const searchInput = useRef<HTMLInputElement>(null);
  const submit = useSubmit();
  const location = useLocation();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!searchInput.current) return;
      const search = encodeHTML(searchInput.current.value.trim());
      if (!search) return;
      submit(
        { search },
        {
          method: "GET",
          action: "/items",
        }
      );
    },
    [searchInput, submit]
  );

  useEffect(() => {
    if (searchInput.current && location.pathname === "/")
      searchInput.current.value = "";
  }, [searchInput, location.pathname]);

  return (
    <Form
      className={style.sbSearchContainer}
      onSubmit={handleSubmit}
      action="/items"
    >
      <input
        ref={searchInput}
        type="text"
        name="search"
        id="search"
        placeholder="Nunca dejes de buscar"
        className={style.sbInput}
      />
      <button className={style.sbSubmitBtn}>
        <picture>
          <source media="(max-width: 799px)" srcSet={iconSearch} />
          <source media="(min-width: 800px)" srcSet={iconSearch2x} />
          <img src={iconSearch2x} alt="Icon search" aria-hidden="true" />
        </picture>
      </button>
    </Form>
  );
}
