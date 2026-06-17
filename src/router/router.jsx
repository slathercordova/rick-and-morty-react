import { createBrowserRouter } from "react-router";

import { MainLayout } from "../common/layout/main-layout";
import { Yo } from "../app/yo/yo";
import { Personajes } from "../app/rick-and-morty/personajes";
import { Favoritos } from "../app/favoritos/favoritos";
import { Landing } from "../features/landing/landing";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Landing,
      },
      {
        path: "yo",
        Component: Yo,
      },
      {
        path: "personajes",
        Component: Personajes,
      },
      {
        path: "favoritos",
        Component: Favoritos,
      },
    ],
  },
]);