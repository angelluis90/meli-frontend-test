import { TAuthor } from "@types";

const MELI_BASE_URL = "https://api.mercadolibre.com"
export const API_URL = "http://localhost:3000/api";
export const MELI_API_SEARCH = `${MELI_BASE_URL}/sites/MLA/search`;
export const MELI_API_DETAILS = `${MELI_BASE_URL}/items`;
export const MELI_API_CATEGORIES = `${MELI_BASE_URL}/categories`;

export const AUTHOR_INFO: TAuthor = {
    name: "Angel Luis",
    lastname: "Gonzalez Martinez"
}