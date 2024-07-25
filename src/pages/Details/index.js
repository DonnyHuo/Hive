import { Progress } from "antd";
import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";

const Details = () => {
  const getOption = () => {
    let option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: [
          "Borrow APR，variable",
          "Borrow APR，stable",
          "Utillzation Rate",
        ],
        textStyle: {
          color: "#fff",
        },
        inactiveColor: "rgb(84, 84, 84)",
      },

      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["0%", "25%", "50%", "75%", "100%"],
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#333",
          },
        },
        // axisLabel: {
        //   formatter: '{value} %'
        // }
      },
      series: [
        {
          name: "Borrow APR，variable",
          type: "line",
          data: [0, 0, 30, 50, 200],
        },
        {
          name: "Borrow APR，stable",
          type: "line",
          data: [20, 80, 70, 50, 30],
        },
        {
          name: "Utillzation Rate",
          type: "line",
          data: [60, 20, 30, 80, 90],
        },
      ],
    };
    return option;
  };

  const [tabs, setTabs] = useState(0);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (window.screen.width > 600) {
      setShowAll(true);
    }
  });

  return (
    <div className="content">
      <div className="text-white text-center details">
        <div className="w-full border detailInfo md:p-8 p-4">
          <div className="flex items-center">
            <img
              className="w-10 mr-3"
              src={require("../../asserts/imgs/ether.png")}
            />
            <span className="text-2xl">Tether</span>
            <button className="border mx-2 p-1">
              <img
                className="w-4"
                src={require("../../asserts/imgs/share.png")}
              />
            </button>
            <button className="border p-1">
              <img
                className="w-4"
                src={require("../../asserts/imgs/wallet.png")}
              />
            </button>
          </div>
          <div className="flex items-start mt-6 text-left flex-wrap">
            <div className="mr-10">
              <p className="active flex items-center Light md:text-base text-sm">
                Reserve Size
              </p>
              <p className="text-2xl">$1.08B</p>
            </div>
            <div className="mr-10">
              <p className="active Light  md:text-base text-sm">
                Available Liquidity
              </p>
              <p className="text-2xl">$8.78M</p>
            </div>
            <div>
              <p className="active mr-10 Light  md:text-base text-sm">
                Utilization Rate
              </p>
              <p className="text-2xl text-left">99.19%</p>
            </div>
            <div>
              <p className="active Light  md:text-base text-sm">Oracle Price</p>
              <p className="text-2xl flex items-center">
                <span>$1.00</span>
                <button className="border mx-2 p-1">
                  <img
                    className="w-3"
                    src={require("../../asserts/imgs/share.png")}
                  />
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="border p-2 mb-4 _hiddenP mt-4">
          <button
            className={`py-2 w-1/3 rounded-2xl ${tabs == 0 && "activeBtn"}`}
            onClick={() => {
              setTabs(0);
            }}
          >
            Overview
          </button>
          <button
            className={`py-2 w-1/3 rounded-2xl ${tabs == 1 && "activeBtn"}`}
            onClick={() => {
              setTabs(1);
            }}
          >
            You info
          </button>
          <button
            className={`py-2 w-1/3 rounded-2xl ${tabs == 2 && "activeBtn"}`}
            onClick={() => {
              setTabs(2);
            }}
          >
            Borrow list
          </button>
        </div>
        <div className="flex items-start justify-between md:mt-10 mt-4">
          {(tabs === 0 || showAll) && (
            <div className="boxList border md:py-8 md:px-3 text-left noBorder">
              <div className="text-lg mb-4">Reserve status & configuration</div>
              <div className="listBox p-4">
                <div className="activeTitle">Supply Info</div>
                <div className="flex items-center py-4 line">
                  <div>
                    <Progress
                      type="circle"
                      percent={35.21}
                      strokeColor="#FF4B01"
                      trailColor="#322E2D"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="mx-6">
                      <div className="flex items-center">
                        <span className="text text-sm Light">
                          Total supplied
                        </span>
                        <img
                          className="w-4 ml-1"
                          src={require("../../asserts/imgs/tips.png")}
                        />
                      </div>
                      <div className="py-2">1.08B of 2.00B</div>
                      <div className="text text-sm Light">
                        $ 1.08B of $ 2.00B
                      </div>
                    </div>
                    <div className="mr-5">
                      <div className="text text-sm Light mb-2">APY</div>
                      <div>69.48 %</div>
                    </div>
                  </div>
                </div>
                <div className="my-4">Collateral usage</div>
                <div className="redTips flex items-center p-5">
                  <img
                    className="w-5"
                    src={require("../../asserts/imgs/redTips.png")}
                  />
                  <div className="ml-4">
                    <p>
                      Asset can only be used as collateral in isolation mode
                      only
                    </p>
                    <p className="Light text-sm">
                      In lsolation mode you cannot supply other assets as
                      collateral for borrowing. Assets usedas collateral in
                      lsolation mode can only be borrowed to a specific debt
                      ceiling.{" "}
                    </p>
                    <div className="underline">Learn More</div>
                  </div>
                </div>
                <div className="flex items-center  justify-between mt-5">
                  <div className="listBox w-1/3 p-3">
                    <div className="flex items-center">
                      <p className="text text-sm Light">Max LTV</p>
                      <img
                        className="w-4 ml-1"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                    </div>
                    <div>75.00%</div>
                  </div>
                  <div className="listBox w-1/3 p-3 mx-2">
                    <div className="flex items-center">
                      <p className="text text-sm Light">
                        Liquidation threshold
                      </p>
                      <img
                        className="w-4 ml-1"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                    </div>
                    <div>75.00%</div>
                  </div>
                  <div className="listBox w-1/3 p-3">
                    <div className="flex items-center">
                      <p className="text text-sm Light">Liquidation penalty</p>
                      <img
                        className="w-4 ml-1"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                    </div>
                    <div>75.00%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5 text text-sm">
                  <div className="flex items-center">
                    <span className="">Isolated Debt Ceiling</span>
                    <img
                      className="w-4 ml-1"
                      src={require("../../asserts/imgs/tips.png")}
                    />
                  </div>
                  <div>$ 123.23K of $ 5.00M</div>
                </div>
                <Progress percent={50} showInfo={false} />
              </div>
              <div className="listBox p-4 mt-6">
                <div className="activeTitle">Borrow Info</div>
                <div>
                  <div className="flex items-start py-4">
                    <div className="mr-6">
                      <div className="flex items-center">
                        <span className="text text-sm Light">
                          Total supplied
                        </span>
                        <img
                          className="w-4 ml-1"
                          src={require("../../asserts/imgs/tips.png")}
                        />
                      </div>
                      <div className="py-2">1.07B</div>
                      <div className="text text-sm Light">$ 1.07B</div>
                    </div>
                    <div className="mr-5">
                      <div className="text text-sm Light mb-2 flex items-center">
                        <span className="text text-sm Light">
                          APY, variable
                        </span>
                        <img
                          className="w-4 ml-1"
                          src={require("../../asserts/imgs/tips.png")}
                        />
                      </div>

                      <div>80.62 %</div>
                    </div>
                  </div>
                  <div>Collector Info</div>
                </div>
              </div>
              <div className="listBox p-4 mt-6">
                <div className="activeTitle">E-Mode info</div>
                <div className="my-5">
                  <div className="flex items-center">
                    <span className="text Light mr-2">E-Mode Category</span>
                    <img
                      className="w-4"
                      src={require("../../asserts/imgs/lightning.png")}
                    />
                    <span>Stablecoins</span>
                  </div>
                  <div className="flex items-center  justify-between mt-5">
                    <div className="listBox w-1/3 p-3">
                      <div className="flex items-center">
                        <p className="text text-sm Light">Max LTV</p>
                        <img
                          className="w-4 ml-1"
                          src={require("../../asserts/imgs/tips.png")}
                        />
                      </div>
                      <div>75.00%</div>
                    </div>
                    <div className="listBox w-1/3 p-3 mx-2">
                      <div className="flex items-center">
                        <p className="text text-sm Light">
                          Liquidation threshold
                        </p>
                        <img
                          className="w-4 ml-1"
                          src={require("../../asserts/imgs/tips.png")}
                        />
                      </div>
                      <div>75.00%</div>
                    </div>
                    <div className="listBox w-1/3 p-3">
                      <div className="flex items-center">
                        <p className="text text-sm Light">
                          Liquidation penalty
                        </p>
                        <img
                          className="w-4 ml-1"
                          src={require("../../asserts/imgs/tips.png")}
                        />
                      </div>
                      <div>75.00%</div>
                    </div>
                  </div>
                  <div className="text text-sm Light mt-4">
                    E-Mode increases your LTV for a selected category of assets,
                    meaning that when E-mode is enabled, you will have higher
                    borrowing power over assets of the same E-mode category
                    which are defined by Aave Governance. You can enter E-Mode
                    from your Dashboard. To learn more about E-Mode and applied
                    restrictions in FAQ or Aave V3 Technical Paper.
                  </div>
                </div>
              </div>
              <div className="listBox p-4 mt-6">
                <div className="activeTitle">Interest rate model</div>
                <div className="mt-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p>
                        <span className="text Light">Utilization Rate</span>
                      </p>
                      <p className="text-xl mt-2">99.19 %</p>
                    </div>

                    <button className="border flex items-center px-2 py-1">
                      <span className="text text-sm Light pr-2">
                        Interest Rate Strategy
                      </span>
                      <img src={require("../../asserts/imgs/share.png")} />
                    </button>
                  </div>
                  <div className="mt-10">
                    <ReactEcharts option={getOption()} />
                  </div>
                </div>
              </div>
            </div>
          )}
          {(tabs !== 0  || showAll) && <div className="boxList text-left">
            {(tabs === 1 || showAll) && (
              <div className="border md:p-8 p-6">
                <div className="text-lg mb-4">Your info</div>
                <div className="border-b flex items-center line pb-5">
                  <button className="rounded-full bgRed flex items-center justify-center p-2 mr-4">
                    <img
                      className="w-6"
                      src={require("../../asserts/imgs/wallets.png")}
                    />
                  </button>
                  <div>
                    <p className="text Light text-sm">Wallet balance</p>
                    <p className="text-xl">2.16 USDT</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="flex items-center">
                      <span className="text Light text-sm">
                        Available to supply
                      </span>
                      <img
                        className="w-4 ml-1"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                    </p>
                    <p className="text-xl">2.16 USDT</p>
                    <p className="text Light">$ 2.16</p>
                  </div>
                  <button className="redBtn py-2 px-3 text-sm">Supply</button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="flex items-center">
                      <span className="text Light text-sm">
                        Available to borrow
                      </span>
                      <img
                        className="w-4 ml-1"
                        src={require("../../asserts/imgs/tips.png")}
                      />
                    </p>
                    <p className="text-xl">2.16 USDT</p>
                    <p className="text Light">$ 2.16</p>
                  </div>
                  <button className="redBtn py-2 px-3 text-sm">Borrow</button>
                </div>
              </div>
            )}
            {(tabs === 2 || showAll) && (
              <div className="border md:p-8 p-0 md:mt-10 noBorder">
                <div className="text-lg mb-4">Borrow list</div>
                <div className="flex items-center text Light text-sm _hiddenM">
                  <div className="w-52">Owner</div>
                  <div>Balance</div>
                </div>
                <div>
                  <div className="md:flex items-center md:listBg md:p-2 mt-2 border p-6">
                    <div className="flex items-center w-48">
                      <img
                        className="w-8 mr-2"
                        src={require("../../asserts/imgs/connect.png")}
                      />
                      <span>0x576912</span>
                    </div>
                    <div className="flex items-center justify-between my-2 flex-1">
                      <div>
                        <p className="_hiddenP text text-sm Light">Balance</p>
                        <p>2,343,455.09 USDT</p>
                        <p className="text text-sm Light">$2,343,455.09</p>
                      </div>
                      <button className="redBtn py-2 px-3 text-sm">Borrow</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Details;
