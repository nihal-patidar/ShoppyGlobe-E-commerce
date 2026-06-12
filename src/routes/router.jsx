import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PageLoader from "../components/PageLoader";

const Layout = lazy(() => import("../components/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const NotFound = lazy(() => import("../pages/NotFound"));
const RouteError = lazy(() => import("../pages/RouteError"));

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: (
        <Suspense fallback={<PageLoader />}>
          <Layout />
        </Suspense>
      ),

      errorElement: (
        <Suspense fallback={<PageLoader />}>
          <RouteError />
        </Suspense>
      ),

      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "cart",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "checkout",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Checkout />
            </Suspense>
          ),
        },
        {
          path: "product/:id",
          element: (
            <Suspense fallback={<PageLoader />}>
              <ProductDetail />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;