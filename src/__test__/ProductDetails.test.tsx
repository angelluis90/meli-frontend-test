// import { render } from "@testing-library/react"
import RouterWrapper from "./RouterWrapper";
import { render } from "@testing-library/react";
import { formatCurrency } from "@src/utils/utils";
import ProductDetailItem from "@src/components/items/ProductDetailItem";
import { ProductDetailsData } from "../__mocks__/data";

test("ProductDetails Component", () => {
  // Define mocked data
  const item = ProductDetailsData

  const { container, queryByText, getByAltText } = render(
    <RouterWrapper>
      <ProductDetailItem {...item} />
    </RouterWrapper>
  );

  // Assertions
  expect(true).toBeTruthy();

  // Price
  const priceContainer = container.getElementsByClassName("currency");
  const expectedPrice = formatCurrency(10000.99, "ARS", true).replace(",", ""); // $ 10.00099
  expect(priceContainer.length).toBe(1);
  expect(priceContainer[0].textContent).toBe(expectedPrice);

  // Title
  expect(queryByText(item.title)?.textContent).toContain(item.title);

  // Picture
  expect((getByAltText(item.title) as HTMLImageElement).src).toContain(
    item.picture
  );

  const conditionAndSoldContainer = container.getElementsByClassName("stats");

  expect(conditionAndSoldContainer[0].textContent).toBe(`${item.condition } - ${item.sold_quantity } vendidos`);
  
});
