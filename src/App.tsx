import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/Layout";
import SearchResults from "./pages/SearchResult";
import "./index.scss";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route key="home" path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route key="items" path="items" element={<SearchResults />} />
        <Route key="details" path="items/:id" element={<ProductDetails />} />
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
