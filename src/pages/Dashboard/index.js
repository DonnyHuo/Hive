import { Switch, Checkbox } from "antd";

const Home = () => {
  return (
    <div className="content">
      <div className="text-white text-center dashboard">
        <div className="dashboardTitle">
          <img
            className="w-11 mr-4"
            src={require("../../asserts/imgs/eth.png")}
          />
          <span className="text-4xl gradient">Ethereum Market</span>
        </div>
        <div className="flex items-start justify-start mt-8">
          <div className="mr-10">
            <p className="active text-left">Net worth</p>
            <p className="text-2xl">$300.00</p>
          </div>
          <div className="mr-10">
            <p className="active text-left">Net APY</p>
            <p className="text-2xl">-26.88%</p>
          </div>
          <div>
            <p className="active text-left">Health factor</p>
            <p className="flex items-center">
              <span className="text-2xl green">3.29</span>
              <button className="mx-2 border text-xs smBtn text">
                Risk Details
              </button>
              <button className="flex items-center justify-center border text-xs smBtn">
                <img
                  className="w-3 mr-1"
                  src={require("../../asserts/imgs/warn.png")}
                />
                <span className="text">Notify</span>
              </button>
            </p>
          </div>
        </div>
        <div className="text-right my-5">
          <button className="border px-2 py-1 text-sm smBtn text">
            View Transactions
          </button>
        </div>
        <div className="text-left flex flex-wrap justify-between assetsBox">
          <div className="boxList border px-5 pt-7 pb-4 mb-4">
            <div className="text-xl flex items-center justify-between">
              <span>Your suppiles</span>
              <button className="Light text text-sm">Hide</button>
            </div>
            <div className="flex items-center mt-5">
              <button className="Light border text-sm flex items-center px-2 py-0.5 mr-1">
                <span className="text-sm mr-1 text">Balance</span>
                <span className="text-sm">$400.00</span>
              </button>
              <button className="Light border text-sm flex items-center px-2 py-0.5 mr-1">
                <span className="text-sm mr-1 text">APY</span>
                <span className="text-sm">4.9%</span>
                <img
                  className="w-4 ml-1 mb-0.5"
                  src={require("../../asserts/imgs/tips.png")}
                />
              </button>
              <button className="Light border text-sm flex items-center justify-start px-2 py-0.5 mr-1">
                <span className="text-sm mr-1 text">Collateral</span>
                <span className="text-sm">$400.00</span>
                <img
                  className="w-4 ml-1 mb-0.5"
                  src={require("../../asserts/imgs/tips.png")}
                />
              </button>
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
                      <span>Balance</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span>APY</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>

                  <th>
                    <div className="flex items-center">
                      <span className="mr-1">Collateral</span>
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
                        className="w-6 mr-2"
                        src={require("../../asserts/imgs/eths.png")}
                      />
                      <span>ETH</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="text-base">0.0011111</p>
                      <p className="text text-sm">$400.00</p>
                    </div>
                  </td>
                  <td>0%</td>
                  <td>
                    <Switch defaultChecked />
                  </td>
                  <td className="text-right">
                    <button className="btn px-2 py-2 mr-2 text-sm activeBtn">
                      Supply
                    </button>
                    <button className="btn px-2 py-2 text-sm">Withdraw</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <img
                        className="w-6 mr-2"
                        src={require("../../asserts/imgs/eths.png")}
                      />
                      <span>ETH</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="text-base">0.0011111</p>
                      <p className="text text-sm">$400.00</p>
                    </div>
                  </td>
                  <td>0%</td>
                  <td>
                    <Switch defaultChecked />
                  </td>
                  <td className="text-right">
                    <button className="btn px-2 py-2 mr-2 text-sm activeBtn">
                      Supply
                    </button>
                    <button className="btn px-2 py-2 text-sm">Withdraw</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="boxList border px-5 pt-7 pb-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <span className="text-xl">Your borrows</span>
                <span className="Light mx-4">E-Mode</span>
                <button className="flex items-center justify-start border smBtn">
                  <img
                    className="w-5"
                    src={require("../../asserts/imgs/lightning.png")}
                  />

                  <span className="text-sm">Disabled</span>
                  <img
                    className="w-5"
                    src={require("../../asserts/imgs/setting.png")}
                  />
                </button>
              </div>
              <button className="Light text text-sm">Hide</button>
            </div>
            <div className="flex items-center mt-5">
              <button className="Light border text-sm flex items-center px-2 py-0.5 mr-1">
                <span className="text-sm mr-1 text">Balance</span>
                <span className="text-sm">$400.00</span>
              </button>
              <button className="Light border text-sm flex items-center px-2 py-0.5 mr-1">
                <span className="text-sm mr-1 text">APY</span>
                <span className="text-sm">4.9%</span>
                <img
                  className="w-4 ml-1 mb-0.5"
                  src={require("../../asserts/imgs/tips.png")}
                />
              </button>
              <button className="Light border text-sm flex items-center justify-start px-2 py-0.5 mr-1">
                <span className="text-sm mr-1 text">Borrow power used</span>
                <span className="text-sm">$400.00</span>
                <img
                  className="w-4 ml-1 mb-0.5"
                  src={require("../../asserts/imgs/tips.png")}
                />
              </button>
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
                      <span>Debt</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span>APY</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>

                  <th>
                    <div className="flex items-center">
                      <span className="mr-1">APY type</span>
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
                        className="w-6 mr-2"
                        src={require("../../asserts/imgs/eths.png")}
                      />
                      <span>ETH</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="text-base">0.0011111</p>
                      <p className="text text-sm">$400.00</p>
                    </div>
                  </td>
                  <td>0%</td>
                  <td>
                    <Switch defaultChecked />
                  </td>
                  <td className="text-right">
                    <button className="btn px-2 py-2 mr-2 text-sm activeBtn">
                      Borrow
                    </button>
                    <button className="btn px-2 py-2 text-sm">Repay</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <img
                        className="w-6 mr-2"
                        src={require("../../asserts/imgs/eths.png")}
                      />
                      <span>ETH</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="text-base">0.0011111</p>
                      <p className="text text-sm">$400.00</p>
                    </div>
                  </td>
                  <td>0%</td>
                  <td>
                    <Switch defaultChecked />
                  </td>
                  <td className="text-right">
                    <button className="btn px-2 py-2 mr-2 text-sm activeBtn">
                      Borrow
                    </button>
                    <button className="btn px-2 py-2 text-sm">Repay</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="boxList border px-5 pt-7 pb-4 mb-4">
            <div className="text-xl flex items-center justify-between">
              <span>Assets to supply</span>
              <button className="Light text text-sm">Hide</button>
            </div>
            <div className="mt-4 Light">
              <Checkbox className="text">Show assets with 0</Checkbox>
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
                      <span>Wallet Balance</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span>APY</span>
                      <div className="ml-1">
                        <div className="arrow_top"></div>
                        <div className="arrow_bottom mt-1"></div>
                      </div>
                    </div>
                  </th>

                  <th>
                    <div className="flex items-center">
                      <span className="mr-1">Can be Collateral</span>
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
                        className="w-6 mr-2"
                        src={require("../../asserts/imgs/eths.png")}
                      />
                      <span>ETH</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="text-base">0.0011111</p>
                      <p className="text text-sm">$400.00</p>
                    </div>
                  </td>
                  <td>0%</td>
                  <td>
                    <Switch defaultChecked />
                  </td>
                  <td className="text-right">
                    <button className="btn px-2 py-2 mr-2 text-sm activeBtn">
                      Supply
                    </button>
                    <button className="btn px-2 py-2 text-sm">Withdraw</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <img
                        className="w-6 mr-2"
                        src={require("../../asserts/imgs/eths.png")}
                      />
                      <span>ETH</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="text-base">0.0011111</p>
                      <p className="text text-sm">$400.00</p>
                    </div>
                  </td>
                  <td>0%</td>
                  <td>
                    <Switch defaultChecked />
                  </td>
                  <td className="text-right">
                    <button className="btn px-2 py-2 mr-2 text-sm activeBtn">
                      Supply
                    </button>
                    <button className="btn px-2 py-2 text-sm">Withdraw</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="boxList border px-5 pt-7 pb-4 mb-4">
            <div className="text-xl flex items-center justify-between">
              <span>Assets to borrow</span>
              <button className="Light text text-sm">Hide</button>
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
                      <span>Available</span>
                      <img
                        className="w-4 ml-1"
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
                      <span>AP,variable</span>
                      <img
                        className="w-4 ml-1"
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
                        className="w-6 mr-2"
                        src={require("../../asserts/imgs/eths.png")}
                      />
                      <span>ETH</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="text-base">0.0011111</p>
                      <p className="text text-sm">$400.00</p>
                    </div>
                  </td>
                  <td>0%</td>
                  <td className="text-right">
                    <button className="btn px-2 py-2 mr-2 text-sm activeBtn">
                      Borrow
                    </button>
                    <button className="btn px-2 py-2 text-sm">Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
