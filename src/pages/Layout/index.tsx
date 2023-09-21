import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/global/Header";
import Breadcrumbs from "@src/components/global/Breadcrumbs";

function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <Header />
      <main className="container mb-10">
        {pathname !== "/" ? <Breadcrumbs /> : null}
        <Outlet />
      </main>
      <div id="alerts-container" className="fixed top-0 right-0 w-96 max-w-full max-h-screen overflow-auto p-2"></div>
    </>
  );
}

export default Layout;
