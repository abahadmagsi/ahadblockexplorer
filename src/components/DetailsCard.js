import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import { Alchemy, Network } from "alchemy-sdk";
const config = {
  apiKey: "7Nlg2rBLF_YXtAlscm_-Cl4pzrHrdigd",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

function formateTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const datevalues = {
    fullYear: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hourse: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
  return datevalues;
}

function DetailsCard() {
  const [latestBlock, setLatestBlock] = useState([]);
  const [latestTrans, setLatestTrans] = useState([]);
  const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;

  useEffect(
    () =>
      async function fetchBlocks() {
        try {
          const transRes = await alchemy.core.getAssetTransfers({
            fromBlock: "0x0",
            toBlock: "latest",
            excludeZeroValue: true,
            category: ["external"],
            maxCount: "0x000A",
          });
          //   await latestTrans.push();
          await setLatestTrans(transRes.transfers);
          for (let i = 0; i <= 10; i++) {
            const res = await alchemy.core.getBlock(
              (await alchemy.core.getBlockNumber()) - i
            );
            // await latestBlock.push(res);
            await latestBlock.push(res);
            await setLatestBlock([...latestBlock]);
          }
        } catch (err) {
          alert("503: Internal Server Error.");
        }
      },
    []
  );

  //   console.log(latestTrans);
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        // alignContent: "space-between",
        alignSelf: "stretch",
      }}
    >
      {/* <Table striped bordered hover size="sm">
        <thead>
          <th>Latest Blocks</th>
        </thead>
        <tbody>
          <tr>
            <td>{latestBlock.number}</td>
            <td>Fee Recipient Eden Network: Builder 155 txns in 12 secs</td>
            <td>0.04257 Eth</td>
          </tr>
        </tbody>
      </Table> */}

      <div className="container">
        <div className="row  ">
          <div className="col-6">
            <div className="card ">
              <div className="card-header">
                <div className="card-title">Latest Blocks</div>
              </div>
              <div
                className="card-body h-20"
                style={{ maxHeight: "500px", overflow: "scroll" }}
              >
                <table className="table table-responsive table-striped flex-row">
                  <tbody>
                    {latestBlock.map((val, index) => (
                      <tr key={index}>
                        <td>
                          <Link
                            to={`blockDetails`}
                            state={{ number: val.number }}
                          >
                            {val.number}
                          </Link>
                        </td>

                        <td className="flex-column">{val.miner}</td>
                        <td>{`${formateTime(val.timestamp).fullYear}-${
                          formateTime(val.timestamp).month
                        }-${formateTime(val.timestamp).date} ${
                          formateTime(val.timestamp).hourse
                        }:${formateTime(val.timestamp).minutes}:${
                          formateTime(val.timestamp).seconds
                        }`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <div className="col-12 text-center">
                  <Link href="#">click me</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Latest Transictions</div>
              </div>
              <div
                className="card-body h-20"
                style={{ maxHeight: "500px", overflow: "scroll" }}
              >
                <table className="table table-responsive table-striped">
                  <tbody>
                    {latestTrans.map((val, ind) => (
                      <tr key={ind}>
                        {/* {console.log(val)} */}
                        <td>
                          <Link to={`transaction`} state={{ hash: val.hash }}>
                            {`${val.hash}`.slice(0, 10)}
                          </Link>
                        </td>
                        <td>
                          From {val.from} to {val.to}
                        </td>
                        <td>{val.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <div className="col-12 text-center">
                  <Link href="#">click me</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default DetailsCard;
