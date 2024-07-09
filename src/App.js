import Header from "./components/header";
import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/App";
import Dashboard from "./pages/Dashboard";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { chainList } from "./utils/config";
import { useDispatch } from "react-redux";
import Market from "./pages/Market";
import Liquidation from "./pages/Liquidation";
import Details from "./pages/Dashboard/details";

function App() {
  const { chainId } = useWeb3ModalAccount();
  const dispatch = useDispatch();

  const checkChain = async () => {
    if (window.ethereum) {
      if (chainId) {
        chainList.map((chain) => {
          if (chain.chainId == chainId) {
            dispatch({
              type: "CHANGE_INVITE_CONTRACT",
              payload: chain.inviteContract,
            });
            dispatch({
              type: "CHANGE_POOL_MANAGER",
              payload: chain.poolManager,
            });
          }
        });
      } else {
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        const chainIdNow = parseInt(chainId, 16);
        chainList.map((chain) => {
          if (chain.chainId == chainIdNow) {
            dispatch({
              type: "CHANGE_INVITE_CONTRACT",
              payload: chain.inviteContract,
            });
            dispatch({
              type: "CHANGE_POOL_MANAGER",
              payload: chain.poolManager,
            });
          }
        });
      }
    }
  };

  useLayoutEffect(() => {
    checkChain();
  }, [chainId]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/market" element={<Market />}></Route>
          <Route path="/liquidation" element={<Liquidation />}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
