import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="contentHome">
      <div className="text-white text-center launch">
        <div className="text-3xl">
          <p>100% capital utilization, creating more value for your wealth!</p>
        </div>
        <div className="text-base opacity-50 pt-5">
          <p>
            Maximize wealth with smart lending and efficient fund management.
            Join our platform for optimal returns and lasting value with 100%
            capital utilization.
          </p>
        </div>
        <Link to="/dashboard">
          <button className="mt-10 _borderS px-6 py-3 rounded-full  flex items-center justify-center m-auto">
            <span>Launch App</span>
            <img className="w-5" src={require("../../asserts/imgs/go.png")} />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default App;
