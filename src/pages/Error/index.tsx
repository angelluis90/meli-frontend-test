import { Link } from "react-router-dom";
import errorIcon from "../../assets/images/error.svg"
import Header from "../../components/global/Header";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main id="error-page" className="container">
        <div className="page__content flex flex-col items-center justify-center gap-8">
          <img src={errorIcon} alt="Error icon" />
          <h1 className="text-2xl">Parece que esta página no existe</h1>
          <Link to={"/"}>Ir a la página principal</Link>
        </div>
      </main>
    </>
  );
}
