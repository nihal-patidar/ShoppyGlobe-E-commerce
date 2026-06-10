import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "product/:id",
          element: <ProductDetail />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
