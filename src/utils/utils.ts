import { TPrice } from "@types";

export function getPrice(value: number, currency: string): TPrice {
  const [amount, decimals] = `${value}`.split(".");
  // const [formattedCurrency] = formatCurrency(value, currency).split(/\s/);
  return {
    currency,
    amount: +amount,
    decimals,
  };
}

export function formatCurrency(
  value: number,
  currency: string,
  decimals?: boolean
) {
  return `${Number(value).toLocaleString("es-AR", {
    currency: currency ?? "ARS",
    style: "currency",
    maximumFractionDigits: decimals ? 5 : 0,
  })}`;
}

export function encodeHTML(s: string) {
  return s
    .replace("&", "&amp;")
    .replace("<", "&lt;")
    .replace(">", "&gt;")
    .replace('"', "&quot;")
    .replace("'", "&#039;");
}
