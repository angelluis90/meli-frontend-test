/* eslint-disable @typescript-eslint/no-explicit-any */

type TAuthor = {
  name: string;
  lastname: string;
};

export type TPrice = {
  currency: string;
  amount: number;
  decimals: string;
  // NOTE:  There are scenarios where the decimal looks like "05".
  // Transforming it to Number will remove the zero and this is a problem.
};

export type TProductInfo = {
  id: string;
  title: string;
  price: TPrice;
  picture: string;
  city: string;
  condition: string;
  free_shipping: boolean;
};

export type TProductInfoWithCategory = TProductInfo & {
  category_id: string;
};

export type TProductInfoDetails = TProductInfo & {
  sold_quantity: number;
  description: string;
};

export type TApiResponse = {
  author: TAuthor;
  categories: string[];
};

export type TApiResponseSearch = TApiResponse & {
  items: TProductInfo[];
};

export type TApiResponseDetails = TApiResponse & {
  item: TProductInfoDetails | null;
};

export type TApiErrorResponse = {
  error: string;
};

export type TCategoryStore = {
  categories: string[];
  isLoading: boolean;
  setCategories: (categories: string[]) => void;
  setIsLoading: (loading: boolean) => void;
};

export type Status = "success" | "error"

export type Response<T> = {
  status: Status;
  data: T | null;
  error: string;
};

// The code below is used to typing the responses from the MELI's APIs
export type TMELISearchResult = {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: TMELIPaging;
  results: TMELIResult[];
  sort: TMELISort;
  available_sorts: TMELISort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
};

export type TMELIAvailableFilter = {
  id: string;
  name: string;
  type: string;
  values: TMELIAvailableFilterValue[];
};

export type TMELIAvailableFilterValue = {
  id: string;
  name: string;
  results: number;
};

export type TMELISort = {
  id: null | string;
  name: string;
};

export type TMELIFilter = {
  id: string;
  name: string;
  type: string;
  values: TMELIFilterValue[];
};

export type TMELIFilterValue = {
  id: string;
  name: string;
  path_from_root: TMELISort[];
};

export type TMELIPadsInfo = {
  tracelog: string[];
};

export type TMELIPaging = {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
};

export type TMELIResult = {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: null;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: string[];
  variation_filters: string[];
  shipping: TMELIShipping;
  stop_time: Date;
  seller: TMELISeller;
  seller_address: TMELISellerAddress;
  address: TMELIAddress;
  attributes: TMELIAttribute[];
  variations_data: { [key: string]: TMELIVariationsDatum };
  installments: TMELIInstallments;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  inventory_id: null;
};

export type TMELIAddress = {
  state_id: string;
  state_name: string;
  city_id: null;
  city_name: string;
};

export type TMELIAttribute = {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: null;
  values: TMELIAttributeValue[];
  source: number;
  value_type: string;
};

export type TMELIAttributeValue = {
  id: null | string;
  name: string;
  struct: null;
  source: number;
};

export type TMELIInstallments = {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
};

export type TMELISeller = {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: Date;
  tags: string[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: TMELISellerReputation;
  eshop: TMELIEshop;
};

export type TMELIEshop = {
  eshop_id: number;
  seller: number;
  nick_name: string;
  eshop_status_id: number;
  site_id: string;
  eshop_experience: number;
  eshop_rubro: null;
  eshop_locations: any[];
  eshop_logo_url: string;
};

export type TMELISellerReputation = {
  level_id: string;
  power_seller_status: string;
  transactions: TMELITransactions;
  metrics: TextMetrics;
};

export type TMELIMetrics = {
  sales: TMELISales;
  claims: TMELICancellations;
  delayed_handling_time: TMELICancellations;
  cancellations: TMELICancellations;
};

export type TMELICancellations = {
  period: string;
  rate: number;
  value: number;
};

export type TMELISales = {
  period: string;
  completed: number;
};

export type TMELITransactions = {
  canceled: number;
  completed: number;
  period: string;
  ratings: TMELIRatings;
  total: number;
};

export type TMELIRatings = {
  negative: number;
  neutral: number;
  positive: number;
};

export type TMELISellerAddress = {
  comment: string;
  address_line: string;
  id: null;
  latitude: null;
  longitude: null;
  country: TMELISort;
  state: TMELISort;
  city: TMELISort;
};

export type TMELIShipping = {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: null;
  promise: null;
};

export type TMELIVariationsDatum = {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
};

export type TMELIProductDescription = {
  text: string;
  plain_text: string;
};

export type TMELIProductDetails = TMELIProductDescription & {
  id: string;
  title: string;
  category_id: string;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  condition: string;
  thumbnail: string;
  descriptions: any[];
  shipping: TMELIShipping;
  seller_address: TMELISellerAddress;
};

export type TMELICategory = {
  id: string;
  name: string;
  picture: null;
  permalink: null;
  total_items_in_this_category: number;
  path_from_root: TMELIPathFromRoot[];
  children_categories: any[];
};

export type TMELIPathFromRoot = {
  id: string;
  name: string;
};
