// import { render } from "@testing-library/react"
import SearchResultsItem from "@components/items/SearchResultsItem";
import RouterWrapper from "./RouterWrapper";
import { render } from "@testing-library/react";
import { formatCurrency } from "@src/utils/utils";

test("SearchResultsItem Component", () => {
  // Define mocked data
  const item = {
    city: "City",
    free_shipping: true,
    id: "MELI123",
    picture: "item.jpg",
    price: {
      amount: 10000,
      currency: "ARS",
      decimals: "99",
    },
    title: "Product Item",
    condition: "new",
  };

  
  const { container, queryByText, getByAltText } = render(
    <RouterWrapper>
      <SearchResultsItem {...item} />
    </RouterWrapper>
  );
  
  // Assertions
  expect(true).toBeTruthy();
  
  // Price
  const priceContainer = container.getElementsByClassName("currency");
  const expectedPrice = formatCurrency(10000.99, "ARS", true).replace(",", "") // $ 10.00099
  expect(priceContainer.length).toBe(1);
  expect(priceContainer[0].textContent).toBe(expectedPrice);

  // City
  expect(queryByText(item.city)?.textContent).toContain(item.city);
  
  // Title
  expect(queryByText(item.title)?.textContent).toContain(item.title);
  
  // Picture
  expect((getByAltText(item.title) as HTMLImageElement).src).toContain(item.picture);

  // Free shipping
  const freeShippingIcon = getByAltText("Free shipping") as HTMLImageElement;
  expect(freeShippingIcon.alt).toContain("Free shipping");
});
