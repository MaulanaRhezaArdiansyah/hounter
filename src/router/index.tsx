import { pagesData } from "./pagesData";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  const pageRoutes = pagesData.map(({ title, path, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};
