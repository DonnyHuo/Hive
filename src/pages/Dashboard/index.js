import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Checkbox, Table } from "antd";
import SupplyModel from "../../components/supply";
import WithDrawModel from "../../components/withdraw";
import RepayModel from "../../components/repay";
import BorrowModel from "../../components/borrow";
import { render } from "@testing-library/react";

const Home = () => {
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState(0);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (window.screen.width > 600) {
      setShowAll(true);
    }
  });

  const columns = [
    {
      title: "Asset",
      dataIndex: "name",
      align: 'left',
      sorter: {
        compare: (a, b) => a.name.length - b.name.length,
        multiple: true,
      },
      render: (_, record) => (
        <div className="flex items-center">
          <img
            className="w-6 mr-2"
            src={require(`../../asserts/imgs/BNB.png`)}
          />
          <span>{record.name}</span>
        </div>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      sorter: {
        compare: (a, b) => a.balance - b.balance,
        multiple: true,
      },
      render: (_, record) => (
        <div>
          <p>{record.balance}</p>
          <p className="text Light text-sm">$2000.00</p>
        </div>
      ),
    },
    {
      title: "APY",
      dataIndex: "apy",
      sorter: {
        compare: (a, b) => a.apy - b.apy,
        multiple: true,
      },
      render: (_, record) => <div className="flex items-center">{record.apy}%</div>,
    },
    {
      title: (
        <div className="flex items-center">
          <span>Collateral</span>
          <img
            className="w-4 ml-1"
            src={require("../../asserts/imgs/tips.png")}
          />
        </div>
      ),
      dataIndex: "collateral",
      sorter: {
        compare: (a, b) => a.collateral - b.collateral,
        multiple: true,
      },
      render: (_, record) => (
        <div className="flex items-center">
          <Switch defaultChecked={record.collateral} />
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "",
      align:"right",
      render: (_, record) => (
        <div className="flex items-center justify-end">
          <button
            className="btn px-2 py-2 mr-2 text-sm activeBtn"
            onClick={() =>
              dispatch({
                type: "CHANGE_SUPPLY_MODEL",
                payload: true,
              })
            }
          >
            Supply
          </button>
          <button
            className="btn px-2 py-2 text-sm"
            onClick={() =>
              dispatch({
                type: "CHANGE_WITHDRAW_MODEL",
                payload: true,
              })
            }
          >
            Withdraw
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "USDT",
      apy: 10,
      collateral: true,
      balance: 0.0001
    },
    {
      key: "2",
      name: "BNB",
      apy: 20,
      collateral: false,
      balance: 0.0201
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    // debugger
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="content">
      <div className="text-white text-center dashboard">
        <div className="text-left mt-5 text-xl _hiddenP">Dashboard</div>
        <div className="dashboardTitle">
          <img
            className="w-8 mr-2 sm:w-11 sm:mr-4"
            src={require("../../asserts/imgs/eth.png")}
          />
          <span className="text-2xl gradient sm:text-4xl">Ethereum Market</span>
        </div>
        <div className="flex items-start justify-start  flex-wrap">
          <div className="mr-10 md:mt-8 mt-4">
            <p className="active text-left">Net worth</p>
            <p className="text-2xl">$300.00</p>
          </div>
          <div className="mr-10 md:mt-8 mt-4">
            <p className="active text-left">Net APY</p>
            <p className="text-2xl">-26.88%</p>
          </div>
          <div className="md:mt-8 mt-4">
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
        <div className="border p-2 mb-4 _hiddenP">
          <button
            className={`py-2 w-1/2 rounded-2xl ${tabs == 0 && "activeBtn"}`}
            onClick={() => {
              setTabs(0);
            }}
          >
            Supply
          </button>
          <button
            className={`py-2 w-1/2 rounded-2xl ${tabs == 1 && "activeBtn"}`}
            onClick={() => {
              setTabs(1);
            }}
          >
            Borrow
          </button>
        </div>
        <div className="text-left flex flex-wrap justify-between assetsBox">
          {tabs == 0 && (
            <div className="boxList border px-5 pt-7 pb-4 mb-4">
              <div className="text-xl flex items-center justify-between">
                <span>Your suppiles</span>
                <button className="Light text text-sm _hiddenM">Hide</button>
              </div>
              <div className="flex items-center flex-wrap">
                <button className="Light border text-sm flex items-center px-2 py-0.5 mr-1 mt-4">
                  <span className="text-sm mr-1 text">Balance</span>
                  <span className="text-sm">$400.00</span>
                </button>
                <button className="Light border text-sm flex items-center px-2 py-0.5 mr-1 mt-4">
                  <span className="text-sm mr-1 text">APY</span>
                  <span className="text-sm">4.9%</span>
                  <img
                    className="w-4 ml-1 mb-0.5"
                    src={require("../../asserts/imgs/tips.png")}
                  />
                </button>
                <button className="Light border text-sm flex items-center justify-start px-2 py-0.5 mr-1 mt-4">
                  <span className="text-sm mr-1 text">Collateral</span>
                  <span className="text-sm">$400.00</span>
                  <img
                    className="w-4 ml-1 mb-0.5"
                    src={require("../../asserts/imgs/tips.png")}
                  />
                </button>
              </div>
              {/* <table className="tables _hiddenM">
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
                      <button
                        className="btn px-2 py-2 mr-2 text-sm activeBtn"
                        onClick={() =>
                          dispatch({
                            type: "CHANGE_SUPPLY_MODEL",
                            payload: true,
                          })
                        }
                      >
                        Supply
                      </button>
                      <button
                        className="btn px-2 py-2 text-sm"
                        onClick={() =>
                          dispatch({
                            type: "CHANGE_WITHDRAW_MODEL",
                            payload: true,
                          })
                        }
                      >
                        Withdraw
                      </button>
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
                      <button className="btn px-2 py-2 text-sm">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table> */}

              <Table
                className="_hiddenM"
                columns={columns}
                dataSource={data}
                onChange={onChange}
                pagination={false}
                showSorterTooltip={false}
              >
                <div>
                  <button className="btn px-2 py-2 mr-2 text-sm activeBtn">
                    Supply
                  </button>
                  <button className="btn px-2 py-2 text-sm">Withdraw</button>
                </div>
              </Table>
              <div className="_hiddenP mt-6">
                <div className="flex items-center">
                  <img
                    className="w-8"
                    src={require("../../asserts/imgs/eths.png")}
                  />
                  <div className="ml-2">
                    <p>Ethereum</p>
                    <p className="text text-sm Light">ETH</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-start justify-between">
                    <span className="text Light">Supply balance</span>
                    <div>
                      <p className="text-right">0.0036300</p>
                      <p className="text">$2,343,455.09</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mt-2">
                    <span className="text Light">Supply APY</span>
                    <span>0%</span>
                  </div>
                  <div className="flex items-start justify-between mt-2">
                    <span className="text Light">Used be collateral</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <button
                      className="activeBtn w-1/2 p-2 rounded-xl"
                      onClick={() =>
                        dispatch({
                          type: "CHANGE_SUPPLY_MODEL",
                          payload: true,
                        })
                      }
                    >
                      Supply
                    </button>
                    <button
                      className="listBox w-1/2 p-2 rounded-xl ml-2"
                      onClick={() =>
                        dispatch({
                          type: "CHANGE_WITHDRAW_MODEL",
                          payload: true,
                        })
                      }
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(tabs == 1 || showAll) && (
            <div className="boxList border px-5 pt-7 pb-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col md:items-center justify-start md:flex-row text-left">
                  <span className="text-xl">Your borrows</span>
                  <div className="flex items-center md:mt-0 mt-2">
                    <span className="Light md:mx-4 mr-4">E-Mode</span>
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
                </div>
                <button className="Light text text-sm _hiddenM">Hide</button>
              </div>
              <div className="flex items-center flex-wrap">
                <button className="Light border text-sm flex items-center px-2 py-0.5 mr-1 md:mt-4 mt-2">
                  <span className="text-sm mr-1 text">Balance</span>
                  <span className="text-sm">$400.00</span>
                </button>
                <button className="Light border text-sm flex items-center px-2 py-0.5 mr-1 md:mt-4 mt-2">
                  <span className="text-sm mr-1 text">APY</span>
                  <span className="text-sm">4.9%</span>
                  <img
                    className="w-4 ml-1 mb-0.5"
                    src={require("../../asserts/imgs/tips.png")}
                  />
                </button>
                <button className="Light border text-sm flex items-center justify-start px-2 py-0.5 mr-1 md:mt-4 mt-2">
                  <span className="text-sm mr-1 text">Borrow power used</span>
                  <span className="text-sm">$400.00</span>
                  <img
                    className="w-4 ml-1 mb-0.5"
                    src={require("../../asserts/imgs/tips.png")}
                  />
                </button>
              </div>
              <table className="tables _hiddenM">
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
                      <button
                        className="btn px-2 py-2 mr-2 text-sm activeBtn"
                        onClick={() =>
                          dispatch({
                            type: "CHANGE_BORROW_MODEL",
                            payload: true,
                          })
                        }
                      >
                        Borrow
                      </button>
                      <button
                        className="btn px-2 py-2 text-sm"
                        onClick={() =>
                          dispatch({
                            type: "CHANGE_REPAY_MODEL",
                            payload: true,
                          })
                        }
                      >
                        Repay
                      </button>
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
              <div className="_hiddenP mt-6">
                <div className="flex items-center">
                  <img
                    className="w-8"
                    src={require("../../asserts/imgs/usdt.png")}
                  />
                  <div className="ml-2">
                    <p>Tether</p>
                    <p className="text text-sm Light">USDT</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-start justify-between">
                    <span className="text Light">Available to borrow</span>
                    <div>
                      <p className="text-right">0.0036300</p>
                      <p className="text">$2,343,455.09</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mt-2">
                    <div className="flex items-center">
                      <span className="text Light">APY, variable</span>
                      <img
                        className="w-4 ml-1"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                    </div>

                    <span>80%</span>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <button
                      className="activeBtn w-1/2 p-2 rounded-xl"
                      onClick={() =>
                        dispatch({
                          type: "CHANGE_BORROW_MODEL",
                          payload: true,
                        })
                      }
                    >
                      Borrow
                    </button>
                    <button
                      className="listBox w-1/2 p-2 rounded-xl ml-2"
                      onClick={() =>
                        dispatch({
                          type: "CHANGE_REPAY_MODEL",
                          payload: true,
                        })
                      }
                    >
                      Repay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabs == 0 && (
            <div className="boxList border px-5 pt-7 pb-4 mb-4">
              <div className="text-xl flex items-center justify-between">
                <span>Assets to supply</span>
                <button className="Light text text-sm _hiddenM">Hide</button>
              </div>
              <div className="mt-4 Light">
                <Checkbox className="text md:text-sm text-base">
                  Show assets with 0 balance
                </Checkbox>
              </div>
              <table className="tables _hiddenM">
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
                      <button className="btn px-2 py-2 text-sm">
                        Withdraw
                      </button>
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
                      <button className="btn px-2 py-2 text-sm">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="_hiddenP mt-6">
                <div className="flex items-center">
                  <img
                    className="w-8"
                    src={require("../../asserts/imgs/eths.png")}
                  />
                  <div className="ml-2">
                    <p>Ethereum</p>
                    <p className="text text-sm Light">ETH</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-start justify-between">
                    <span className="text Light">Supply balance</span>
                    <div>
                      <p className="text-right">0.0036300</p>
                      <p className="text">$2,343,455.09</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mt-2">
                    <div className="flex items-center">
                      <span className="text Light mr-1">Supply APY</span>
                      <img
                        className="w-4"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                    </div>

                    <span>0%</span>
                  </div>
                  <div className="flex items-start justify-between mt-2">
                    <span className="text Light">Can be collateral</span>
                    <img
                      className="w-5"
                      src={require("../../asserts/imgs/correct.png")}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <button className="activeBtn w-1/2 p-2 rounded-xl">
                      Supply
                    </button>
                    <button className="listBox w-1/2 p-2 rounded-xl ml-2">
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(tabs == 1 || showAll) && (
            <div className="boxList border px-5 pt-7 pb-4 mb-4">
              <div className="text-xl flex items-center justify-between">
                <span>Assets to borrow</span>
                <button className="Light text text-sm">Hide</button>
              </div>
              <table className="tables _hiddenM">
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
              <div className="_hiddenP mt-6">
                <div className="flex items-center">
                  <img
                    className="w-8"
                    src={require("../../asserts/imgs/usdt.png")}
                  />
                  <div className="ml-2">
                    <p>Tether</p>
                    <p className="text text-sm Light">USDT</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-start justify-between">
                    <span className="text Light">Available to borrow</span>
                    <div>
                      <p className="text-right">0.0036300</p>
                      <p className="text">$2,343,455.09</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mt-2">
                    <div className="flex items-center">
                      <span className="text Light">APY, variable</span>
                      <img
                        className="w-4 ml-1"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                    </div>

                    <span>80%</span>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <button
                      className="activeBtn w-1/2 p-2 rounded-xl"
                      onClick={() =>
                        dispatch({
                          type: "CHANGE_BORROW_MODEL",
                          payload: true,
                        })
                      }
                    >
                      Borrow
                    </button>
                    <button className="listBox w-1/2 p-2 rounded-xl ml-2">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <SupplyModel />
      <WithDrawModel />
      <RepayModel />
      <BorrowModel />
    </div>
  );
};

export default Home;
