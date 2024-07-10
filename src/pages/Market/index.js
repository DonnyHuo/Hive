import { Switch, Checkbox } from "antd";
import { Link } from "react-router-dom";

const Market = () => {
  return (
    <div className="content">
      <div className="text-white text-center market">
        <div className="dashboardTitle">
          <img
            className="w-11 mr-4"
            src={require("../../asserts/imgs/eth.png")}
          />
          <span className="text-4xl gradient">Ethereum Market</span>
        </div>
        <div className="flex items-start justify-start mt-8 text-left">
          <div className="mr-10">
            <p className="active text-left">Total market size</p>
            <p className="text-2xl">$456.78B</p>
          </div>
          <div className="mr-10">
            <p className="active text-left">Total available</p>
            <p className="text-2xl">$687.79B</p>
          </div>
          <div>
            <p className="active text-left">Total borrows</p>
            <p className="text-2xl">$687.79B</p>
          </div>
        </div>
        <div className="text-left flex flex-wrap justify-between assetsBox mt-20">
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
      </div>
    </div>
  );
};

export default Market;
