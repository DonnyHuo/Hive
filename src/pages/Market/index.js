import { Switch, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const Market = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="content">
      <div className="text-white text-center market">
        <div className="text-left text-xl mt-5 _hiddenP">Markets</div>
        <div className="dashboardTitle">
          <img
            className="md:w-11 w-8 mr-4"
            src={require("../../asserts/imgs/eth.png")}
          />
          <span className="md:text-4xl text-2xl gradient">Ethereum Market</span>
        </div>
        <div className="flex items-start justify-start text-left flex-wrap">
          <div className="mr-10 md:mt-8 mt-4">
            <p className="active text-left">Total market size</p>
            <p className="text-2xl">$456.78B</p>
          </div>
          <div className="mr-10 md:mt-8 mt-4">
            <p className="active text-left">Total available</p>
            <p className="text-2xl">$687.79B</p>
          </div>
          <div className="md:mt-8 mt-4">
            <p className="active text-left">Total borrows</p>
            <p className="text-2xl">$687.79B</p>
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
                  <th>
                    <div className="flex items-center">
                      <span>Total supplied</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span>Supply APY</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span>Total borrowed</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span className="mr-1">Borrow APY</span>
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
                  <td>
                    <div>
                      <p className="text-base">5.83M</p>
                      <p className="text text-sm">$ 350.07B</p>
                    </div>
                  </td>
                  <td>69.47%</td>
                  <td>
                    <div>
                      <p>243.95</p>
                      <p className="text text-sm">$ 14.64M</p>
                    </div>
                  </td>
                  <td>80.67%</td>
                  <td className="text-right">
                    <Link to="/details">
                      <button className="btn px-2 py-2 text-sm">Detail</button>
                    </Link>
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
                <span className="text Light">Total supplied</span>
                <div>
                  <p className="text-right">0.0036300</p>
                  <p className="text">$2,343,455.09</p>
                </div>
              </div>
              <div className="flex items-start justify-between mt-2 line pb-4">
                <span className="text Light">Supply APY</span>
                <span>0%</span>
              </div>
              <div className="flex items-start justify-between mt-4">
                <span className="text Light">Total borrowed</span>
                <div>
                  <p className="text-right">0.0036300</p>
                  <p className="text">$2,343,455.09</p>
                </div>
              </div>
              <div className="flex items-start justify-between mt-2">
                <span className="text Light">Borrow APY, variable</span>
                <span>0%</span>
              </div>
              <div className="mt-5">
                <button className="w-full p-2 rounded-xl listBox">
                  View details
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 border p-4">
            <div className="flex items-center">
              <img
                className="w-8"
                src={require("../../asserts/imgs/usdt.png")}
              />
              <div className="ml-2 text-left">
                <p>Tether</p>
                <p className="text text-sm Light">USDT</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-start justify-between">
                <span className="text Light">Total supplied</span>
                <div>
                  <p className="text-right">0.0036300</p>
                  <p className="text">$2,343,455.09</p>
                </div>
              </div>
              <div className="flex items-start justify-between mt-2 line pb-4">
                <span className="text Light">Supply APY</span>
                <span>0%</span>
              </div>
              <div className="flex items-start justify-between mt-4">
                <span className="text Light">Total borrowed</span>
                <div>
                  <p className="text-right">0.0036300</p>
                  <p className="text">$2,343,455.09</p>
                </div>
              </div>
              <div className="flex items-start justify-between mt-2">
                <span className="text Light">Borrow APY, variable</span>
                <span>0%</span>
              </div>
              <div className="mt-5">
                <button className="w-full p-2 rounded-xl listBox">
                  View details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
