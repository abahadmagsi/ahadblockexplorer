import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
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

function hex2a(hexx) {
  var hex = hexx.toString(); //force conversion
  var str = "";
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}
const BlockDeails = (props) => {
  const [blockDetails, setBlockDetails] = useState();
  const apiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;

  useEffect(
    () =>
      async function fetchBlock() {
        try {
          const response = await fetch(
            `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${props.props.toString(
              16
            )}&boolean=true&apikey=${apiKey}`
          );
          const data = await response.json();

          setBlockDetails(data.result);
        } catch (err) {
          alert("503: Internal Server Error.");
        }
      },
    []
  );
  return (
    <>
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
        <Table>
          <div className="container">
            <div className="row">
              <div className="col-6 w-100">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Block {props.props}</div>
                  </div>
                  <div className="card-body h-20">
                    <table className="table table-responsive table-striped">
                      {blockDetails ? (
                        <tbody>
                          <tr>
                            <td>Miner</td>
                            <td>{blockDetails.miner}</td>
                          </tr>
                          <tr>
                            <td>Hash</td>
                            <td>{blockDetails.hash}</td>
                          </tr>
                          <tr>
                            <td>Timestamp</td>

                            <td>{`${
                              formateTime(blockDetails.timestamp).fullYear
                            }-${formateTime(blockDetails.timestamp).month}-${
                              formateTime(blockDetails.timestamp).date
                            } ${formateTime(blockDetails.timestamp).hourse}:${
                              formateTime(blockDetails.timestamp).minutes
                            }:${
                              formateTime(blockDetails.timestamp).seconds
                            }`}</td>
                          </tr>
                          <tr>
                            <td>Difficulty</td>
                            <td>{parseInt(blockDetails.difficulty, 16)}</td>
                          </tr>
                          <tr>
                            <td>Transactions</td>
                            <td>{blockDetails.transactions.length}</td>
                          </tr>
                          <tr>
                            <td>Receipts Root</td>
                            <td>{blockDetails.receiptsRoot}</td>
                          </tr>
                          <tr>
                            <td>Block Reward</td>
                          </tr>
                          <tr>
                            <td>Total Difficulty</td>

                            <td>
                              {parseInt(blockDetails.totalDifficulty, 16)}
                            </td>
                          </tr>
                          <tr>
                            <td>Gas Used</td>
                            <td>{parseInt(blockDetails.gasUsed, 16)}</td>
                          </tr>
                          <tr>
                            <td>Gas Limit</td>

                            <td>{parseInt(blockDetails.gasLimit, 16)}</td>
                          </tr>
                          <tr>
                            <td>Parent Hash</td>
                            <td>{blockDetails.parentHash}</td>
                          </tr>
                          <tr>
                            <td>State Root</td>
                            <td>{blockDetails.stateRoot}</td>
                          </tr>
                          <tr>
                            <td>Size</td>

                            <td>{parseInt(blockDetails.size, 16)}</td>
                          </tr>
                          <tr>
                            <td>Nonce</td>

                            <td>{parseInt(blockDetails.nonce, 16)}</td>
                          </tr>
                          <tr>
                            <td>Extra Data</td>

                            <td>
                              {hex2a(blockDetails.extraData)} (hash :{" "}
                              {blockDetails.extraData})
                            </td>
                          </tr>
                        </tbody>
                      ) : null}
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
        </Table>
      </Grid>
    </>
  );
};

export default BlockDeails;
