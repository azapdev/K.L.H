import type { ReactNode } from "react";
import { About, Home, Login, Signup } from "../Pages";

export const routes = {
  HOME: "/",
  ABOUT: "/about",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ERRORPAGE: "*",
};

type AppRoute = {
  path: string;
  element: ReactNode;
};

export const NavRoutes: AppRoute[] = [
  {
    path: routes.HOME,
    element: <Home />,
  },
  {
    path: routes.ABOUT,
    element: <About />,
  },
  {
    path: routes.LOGIN,
    element: <Login />,
  },
  {
    path: routes.SIGNUP,
    element: <Signup />,
  },
];
