import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Features from "./pages/features/Features";
import Purchase from "./pages/purchase/Purchase";
import About from "./pages/about/About";
import Crypto from "./pages/crypto/Crypto";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/purchase",
        element: <Purchase />,
      },
      {
        path: "/crypto/:id",
        element: <Crypto />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
   <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>
);
