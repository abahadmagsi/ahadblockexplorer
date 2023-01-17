import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import TransactionDeetails from "../screens/TransactionDetails";
import BlockDeails from "../screens/BlockDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/transaction",
    element: <TransactionDeetails />,
  },
  {
    path: "/blockDetails",
    element: <BlockDeails />,
  },
]);

export default router;
