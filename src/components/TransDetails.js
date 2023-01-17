import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const TransDetailsCard = (props) => {
  const [transDetails, setTransDetails] = useState();
  // const apiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;

  useEffect(() => {
    async function fetchTrasaction() {
      try {
        const response = await fetch(
          `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060&apikey=P2WS5R9HJT5YCEIG48RN8FN6HW996N8Z78`
        );
        const data = await response.json();
        setTransDetails(data);
      } catch (err) {
        alert("503: Internal Server Error.");
      }
      // console.log(data);
      // setTransDetails(data);
      // axios
      //   .post(
      //     `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060&apikey=P2WS5R9HJT5YCEIG48RN8FN6HW996N8Z78`
      //   )
      //   .then((response) => {
      //     transDetails.push(response);
      //     setTransDetails([...transDetails]);
      //   });
    }
    fetchTrasaction();
  }, []);
  // console.log(transDetails);
  return (
    <>
      {/* {transDetails ? console.log(transDetails[0].data) : null} */}
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
                    <div className="card-title">Latest Transictions</div>
                  </div>
                  <div className="card-body h-20">
                    <table className="table table-responsive table-striped">
                      {transDetails ? (
                        <tbody>
                          <tr>
                            <td>Transaction Hash</td>
                            <td>{transDetails.result.hash}</td>
                          </tr>
                          <tr>
                            <td>
                              From <br /> To
                            </td>
                            <td>
                              {transDetails.result.from} <br />{" "}
                              {transDetails.result.to}
                            </td>
                          </tr>
                          <tr>
                            <td>Status</td>
                            <td>{transDetails.result.status}</td>
                          </tr>
                          <tr>
                            <td>Block Number</td>
                            <td>
                              {parseInt(transDetails.result.blockNumber, 16)}
                            </td>
                          </tr>
                          <tr>
                            <td>Block hash</td>
                            <td>{transDetails.result.blockHash}</td>
                          </tr>
                          <tr>
                            <td>Nonce </td>
                            <td>{parseInt(transDetails.result.nonce, 16)}</td>
                          </tr>
                          <tr>
                            <td>Contract Address</td>
                            <td>{transDetails.result.contractAddress}</td>
                          </tr>
                          <tr>
                            <td>Value</td>
                            <td>{parseInt(transDetails.result.value, 16)}</td>
                          </tr>
                          <tr>
                            <td>Gas Price</td>
                            <td>
                              {parseInt(transDetails.result.gasPrice, 16)}
                            </td>
                          </tr>
                          <tr>
                            <td>Gas </td>
                            <td>{parseInt(transDetails.result.gas, 16)}</td>
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

export default TransDetailsCard;
