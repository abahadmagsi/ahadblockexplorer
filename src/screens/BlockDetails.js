import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import BlockDeails from "../components/BlockDetails";
const TransactionDeetails = (params) => {
  const location = useLocation();
  const number = location.state.number;

  return (
    <>
      <Header />
      <BlockDeails props={number} />
    </>
  );
};

export default TransactionDeetails;
