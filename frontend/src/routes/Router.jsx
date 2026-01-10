import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import AppsDetails from "../pages/AppsDetails";
import ShopifyDetails from "../pages/ShopifyDetails";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/projectdetails/:id",
          element: <ProjectDetails />,
        },
        {
          path: "/appdetails/:id",
          element: <AppsDetails />,
        },
        {
          path: "/shopifydetails/:id",
          element: <ShopifyDetails />,
        },
      ],
    },
  ],
);
