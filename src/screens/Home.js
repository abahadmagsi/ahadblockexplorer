import React from "react";
import Header from "../components/Header";
import { Grid } from "@mui/material";
import Container from "../components/Container";
import DetailsCard from "../components/DetailsCard";
function Home() {
  const api = process.env.REACT_APP_ETHERSCAN_API_KEY;
  console.log(api);
  return (
    <div>
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", marginTop: "30px" }}
      >
        <Container />
        <DetailsCard />
      </Grid>
    </div>
  );
}

export default Home;
