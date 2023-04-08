import { About } from "../components/pages/About";
import { Article } from "../components/pages/Article";
import { Home } from "../components/pages/Home";
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
