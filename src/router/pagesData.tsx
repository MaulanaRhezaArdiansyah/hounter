import { About } from "../pages/About";
import { Article } from "../pages/Article";
import { Home } from "../pages/Home";
import { routerType } from "../types/router.types";

export const pagesData: routerType[] = [
  {
    title: "Home",
    path: "",
    element: <Home />,
  },
  {
    title: "About",
    path: "about",
    element: <About />,
  },
  {
    title: "Article",
    path: "article",
    element: <Article />,
  },
];
