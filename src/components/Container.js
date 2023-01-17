import React from "react";
import { Grid, Typography, Card, TextField, Button } from "@mui/material";

function Container() {
  return (
    <Grid item xs={11} style={{ minHeight: "10vh", width: "100%" }}>
      <Card variant="none" style={{ textAlign: "center" }}>
        <Typography variant="h5" component="h5">
          The ahad's ether explorer
        </Typography>
      </Card>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          padding: 20,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Search by addresses / Block"
          id="fullWidth"
          style={{ width: "70%" }}
        />
        <Button
          color="primary"
          disabled={false}
          size="large"
          variant="contained"
          style={{ margin: "10px" }}
        >
          Search
        </Button>
      </Card>
    </Grid>
  );
}

export default Container;
