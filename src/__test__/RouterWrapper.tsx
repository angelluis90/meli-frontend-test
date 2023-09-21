import { PropsWithChildren } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const RouterWrapper = ({ children }: PropsWithChildren) => {
  return <Router>{children}</Router>;
};

export default RouterWrapper;
