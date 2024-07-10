import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SnipingModel from "../../components/sniping";
import { useState } from "react";

const Liquidation = () => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="content">
      <div className="text-white text-center liquidation">
        <div className="text-left text-xl mt-5 _hiddenP">Liquidation</div>
        <div className="dashboardTitle">
          <img
            className="md:w-11 w-8 mr-4"
            src={require("../../asserts/imgs/eth.png")}
          />
          <span className="md:text-4xl text-2xl gradient">Ethereum Market</span>
        </div>
        <div className="flex items-start justify-start flex-wrap">
          <div className="mr-10 md:mt-8 mt-4">
            <p className="active text-left flex items-center">
              <span>TVL</span>
              <img
                className="w-4 ml-1"
                src={require("../../asserts/imgs/tips.png")}
              />
            </p>
            <p className="text-2xl">$456.78B</p>
          </div>
          <div className="mr-10 md:mt-8 mt-4">
            <p className="active text-left">Liquidated</p>
            <p className="text-2xl">$687.79B</p>
          </div>
          <div className="md:mt-8 mt-4">
            <p className="active text-left">Total Collateral Rato</p>
            <p className="text-2xl text-left">$687.79B</p>
          </div>
        </div>
        <div className="text-left flex flex-wrap justify-between assetsBox mt-20 _hiddenM">
          <div className="w-full border px-5 pt-7 pb-4 mb-4">
            <div className="text-xl flex items-center justify-between">
              <span>Ethereum assets</span>
              <div className="flex items-center border px-4 py-1">
                <img
                  className="w-4 mr-2"
                  src={require("../../asserts/imgs/search.png")}
                />
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Search asset name,symbol,or address"
                />
              </div>
            </div>
            <table className="tables">
              <thead>
                <tr>
                  <th>
                    <div className="flex items-center">
                      <span>Asset</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>Owner</th>
                  <th>
                    <div className="flex items-center">
                      <span>Collateral Value</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span>Debt</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span className="mr-1">Health factor</span>
                      <img
                        className="w-4"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span className="mr-1">Pay for</span>
                      <img
                        className="w-4"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <img
                        className="w-10 mr-4"
                        src={require("../../asserts/imgs/eths.png")}
                      />
                      <div>
                        <p>Wrapped BTC</p>
                        <p className="text text-sm Light">BTC</p>
                      </div>
                    </div>
                  </td>
                  <td>0x578e…768d</td>
                  <td>
                    <div>
                      <p className="text-base">5.83M</p>
                      <p className="text text-sm">$ 350.07B</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>243.95</p>
                      <p className="text text-sm">$ 14.64M</p>
                    </div>
                  </td>
                  <td className="active">1.32</td>
                  <td>
                    <div>
                      <p>11,200 USDT</p>
                      <p className="text text-sm">$11,200</p>
                    </div>
                  </td>
                  <td className="text-right">
                    <button
                      className="activeBtn btn px-2 py-2 text-sm"
                      onClick={() => {
                        dispatch({
                          type: "CHANGE_SNIPING_MODEL",
                          payload: true,
                        });
                      }}
                    >
                      Sniping
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <img
                        className="w-10 mr-4"
                        src={require("../../asserts/imgs/usdt.png")}
                      />
                      <div>
                        <p>Tether</p>
                        <p className="text text-sm Light">USDT</p>
                      </div>
                    </div>
                  </td>
                  <td>0x578e…768d</td>
                  <td>
                    <div>
                      <p className="text-base">5.83M</p>
                      <p className="text text-sm">$ 350.07B</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>243.95</p>
                      <p className="text text-sm">$ 14.64M</p>
                    </div>
                  </td>
                  <td className="active">1.32</td>
                  <td>
                    <div>
                      <p>11,200 USDT</p>
                      <p className="text text-sm">$11,200</p>
                    </div>
                  </td>
                  <td className="text-right">
                    <button
                      className="btn btn px-2 py-2 text-sm"
                      onClick={() => {
                        dispatch({
                          type: "CHANGE_SNIPING_MODEL",
                          payload: true,
                        });
                      }}
                    >
                      <img
                        className="w-5 mx-4"
                        src={require("../../asserts/imgs/alarm.png")}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="pb-10 _hiddenP">
          <div className="h-10 text-xl flex items-center justify-between mt-10">
            {!showSearch && <span>Ethereum assets</span>}
            <div
              className={`flex items-center px-4 py-1 ${
                showSearch && "border"
              }`}
            >
              <img
                className="w-5"
                src={require("../../asserts/imgs/search.png")}
                onClick={() => {
                  setShowSearch(true);
                }}
              />
              {showSearch && (
                <input
                  className="searchInput ml-2"
                  type="text"
                  placeholder="Search asset name,symbol,or address"
                />
              )}
            </div>
            {showSearch && (
              <button
                className="text-base"
                onClick={() => {
                  setShowSearch(false);
                }}
              >
                Cancel
              </button>
            )}
          </div>
          <div className="mt-6 border p-4">
            <div className="flex items-center">
              <img
                className="w-8"
                src={require("../../asserts/imgs/eths.png")}
              />
              <div className="ml-2 text-left">
                <p>Ethereum</p>
                <p className="text text-sm Light">ETH</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-start justify-between">
                <span className="text Light">Owner</span>
                <span>0x578e…768d</span>
              </div>
              <div className="flex items-start justify-between mt-2">
                <span className="text Light">Collateral Value</span>

                <div>
                  <p className="text-right">885.96K</p>
                  <p className="text">$2.93B</p>
                </div>
              </div>
              <div className="flex items-start justify-between mt-2">
                <span className="text Light">Debt</span>
                <div>
                  <p className="text-right">885.96K</p>
                  <p className="text">$2.93B</p>
                </div>
              </div>
              <div className="flex items-start justify-between mt-2">
                <div className="flex items-center">
                  <span className="text Light">Health factor</span>
                  <img
                    className="w-4 ml-1"
                    src={require("../../asserts/imgs/tips.png")}
                  />
                </div>
                <span className="activeTitle">1.03</span>
              </div>
              <div className="flex items-start justify-between mt-2">
                <div className="flex items-center">
                  <span className="text Light">Pay for</span>
                  <img
                    className="w-4 ml-1"
                    src={require("../../asserts/imgs/tips.png")}
                  />
                </div>
                <div className="text-right">
                  <p className="text-right">885.96 USDT</p>
                  <p className="text">$2.93B</p>
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="activeBtn w-full p-2 rounded-xl listBox"
                  onClick={() => {
                    dispatch({
                      type: "CHANGE_SNIPING_MODEL",
                      payload: true,
                    });
                  }}
                >
                  Sniping
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 border p-4">
            <div className="flex items-center">
              <img
                className="w-8"
                src={require("../../asserts/imgs/eths.png")}
              />
              <div className="ml-2 text-left">
                <p>Ethereum</p>
                <p className="text text-sm Light">ETH</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-start justify-between">
                <span className="text Light">Owner</span>
                <span>0x578e…768d</span>
              </div>
              <div className="flex items-start justify-between mt-2">
                <span className="text Light">Collateral Value</span>

                <div>
                  <p className="text-right">885.96K</p>
                  <p className="text">$2.93B</p>
                </div>
              </div>
              <div className="flex items-start justify-between mt-2">
                <span className="text Light">Debt</span>
                <div>
                  <p className="text-right">885.96K</p>
                  <p className="text">$2.93B</p>
                </div>
              </div>
              <div className="flex items-start justify-between mt-2">
                <div className="flex items-center">
                  <span className="text Light">Health factor</span>
                  <img
                    className="w-4 ml-1"
                    src={require("../../asserts/imgs/tips.png")}
                  />
                </div>
                <span className="activeTitle">1.03</span>
              </div>
              <div className="flex items-start justify-between mt-2">
                <div className="flex items-center">
                  <span className="text Light">Pay for</span>
                  <img
                    className="w-4 ml-1"
                    src={require("../../asserts/imgs/tips.png")}
                  />
                </div>
                <div className="text-right">
                  <p className="text-right">885.96 USDT</p>
                  <p className="text">$2.93B</p>
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="w-full p-2 rounded-xl listBox flex items-center justify-center"
                  onClick={() => {
                    dispatch({
                      type: "CHANGE_SNIPING_MODEL",
                      payload: true,
                    });
                  }}
                >
                  <img
                    className="w-7"
                    src={require("../../asserts/imgs/alarm.png")}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SnipingModel />
    </div>
  );
};

export default Liquidation;
