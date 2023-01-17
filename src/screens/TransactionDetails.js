import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import TransDetailsCard from "../components/TransDetails";
const TransactionDeetails = (params) => {
  //   const { transaction } = useLoaderData();
  const location = useLocation();
  const hash = location.state.hash;

  return (
    <>
      <Header />
      <TransDetailsCard hash={hash} />
    </>
  );
};

export default TransactionDeetails;
