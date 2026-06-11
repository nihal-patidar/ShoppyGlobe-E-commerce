import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
import App from "../App";
import RouteError from "../pages/RouteError";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement : <RouteError />,
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
    },
    {
        path : '/test',
        element : <App />
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
