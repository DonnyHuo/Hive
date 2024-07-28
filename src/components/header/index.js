import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
  useDisconnect,
} from "@web3modal/ethers5/react";
import { shortStr, getContract, chainList } from "../../utils";
import { Drawer, notification, Popover } from "antd";
// import { useSelector, useDispatch } from "react-redux";
import erc20Abi from "../../asserts/abi/erc20Abi.json";
import { ethers } from "ethers";
// import { useInterval } from "ahooks";
import { useTranslation } from "react-i18next";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { walletProvider } = useWeb3ModalProvider();

  const logoIcon = require("../../asserts/imgs/logo.png");
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const { open } = useWeb3Modal();

  const selectNetworkIcon = (chainId) => {
    return chainList.filter((list) => list.chainId === chainId)[0];
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const onClose = () => {
    setOpenDrawer(false);
  };

  const [openUserAccount, setOpenUserAccount] = useState(false);

  const [api, contextHolder] = notification.useNotification({
    placement: "topRight",
    duration: 3,
    top: openUserAccount ? 320 : 0,
    maxCount: 10,
    zIndex: 100000,
  });

  const handleOpenChange = (newOpen) => {
    setOpenUserAccount(newOpen);
  };

  const { disconnect } = useDisconnect();

  const [usdt, setUsdt] = useState("0");
  const [bnbBalance, setBnbBalance] = useState("0");

  

  const getBalance = async () => {
    const decimals = await getContract(
      walletProvider,
      "0x55d398326f99059ff775485246999027b3197955",
      erc20Abi,
      "decimals"
    );
    const balance = await getContract(
      walletProvider,
      "0x55d398326f99059ff775485246999027b3197955",
      erc20Abi,
      "balanceOf",
      address
    );
    setUsdt(ethers.utils.formatUnits(balance, decimals) * 1);
    
    const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
    const balanceOf = await ethersProvider.getBalance(address);
    const bnbBalance = parseFloat(
      (ethers.utils.formatUnits(balanceOf, 18) * 1).toFixed(3)
    );
    setBnbBalance(bnbBalance);
  };

  useEffect(() => {
    address && getBalance();
  }, [address]);

  const AccountContent = () => {
    const copy = (address) => {
      api["success"]({ message: t("referral.CopiedSuccess") });
      navigator.clipboard.writeText(address);
    };
    return (
      <div className="font-medium">
        {contextHolder}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800 cursor-pointer">
          <div className="flex items-center" onClick={() => copy(address)}>
            <img
              className="w-7"
              src={require("../../asserts/imgs/connect.png")}
              alt=""
            />
            <span className="px-2">{shortStr(address)}</span>

            <img
              className="w-4 cursor-pointer"
              src={require("../../asserts/imgs/copy.png")}
              alt=""
            />
          </div>
          <div
            className="rounded-xl _background3 p-2 flex items-center justify-center closeWallet"
            onClick={() => {
              setOpenUserAccount(false);
              disconnect();
            }}
          ></div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center">
              <img
                className="w-6"
                src={require("../../asserts/imgs/usdt.png")}
                alt=""
              />
              <span className="ml-2">USDT</span>
            </div>
            <div>{usdt}</div>
          </div>
          <div className="flex items-center justify-between mt-5 border-zinc-800">
            <div className="flex items-center">
              <img
                className="w-6"
                src={require("../../asserts/imgs/BNB.png")}
                alt=""
              />
              <span className="ml-2">BNB</span>
            </div>
            <div>{bnbBalance}</div>
          </div>
        </div>
      </div>
    );
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [window.innerWidth]);

  return (
    <div className="flex items-center justify-between pl-5 pr-5 text-white relative _header">
      <div>
        <Link to="" className="flex items-center justify-between">
          <img className="w-7 mt-4 mb-4" src={logoIcon} alt="" />
          <span className="pl-2 text-xl">Hive</span>
        </Link>
      </div>

      <div className="flex items-center font-medium _hiddenM btnStyle _links">
        <Link
          className={`ml-6 mr-6 ${
            location.pathname === "/dashboard" ? "_activeLink" : "_titleLink"
          }`}
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={`ml-6 mr-6 ${
            location.pathname === "/market" ? "_activeLink" : "_titleLink"
          }`}
          to="/market"
        >
          Market
        </Link>
        <Link
          className={`ml-6 mr-6 ${
            location.pathname === "/liquidation" ? "_activeLink" : "_titleLink"
          }`}
          to="/liquidation"
        >
          Liquidation
        </Link>

        {/* <Popover
          content={<Community />}
          trigger="click"
          placement="bottom"
          arrow={false}
          color={"#1C172A"}
          open={openCommunity}
          onOpenChange={OpenCommunityChange}
          overlayClassName="communityList"
        >
          <button className="px-6 cursor-pointer flex items-center">
            <span>{t("header.Community")}</span>
            <img
              className={`w-3 ml-1 mt-0.5 ${
                openCommunity ? "rotate-180" : "animate-bounce"
              }`}
              src={require("../../asserts/img/down.png")}
              alt=""
            />
          </button>
        </Popover> */}
      </div>
      <div className="flex items-center">
        {isConnected && location.pathname !== "/" && (
          <button
            className={`btnStyle p-2 text-sm mr-2 flex items-center border ${
              !selectNetworkIcon(chainId) ? "border-red-700" : "_border"
            }`}
            onClick={() => open({ view: "Networks" })}
          >
            {selectNetworkIcon(chainId) ? (
              <img
                className="w-5"
                src={selectNetworkIcon(chainId)?.url}
                alt=""
              />
            ) : (
              <>
                <img
                  className="w-5 _hiddenP"
                  src={require("../../asserts/imgs/warning.png")}
                  alt=""
                />

                <Popover
                  content={t("header.NetworkUnsupported")}
                  trigger="hover"
                  placement="bottom"
                  color={"#1C172A"}
                  overlayClassName="wrongNetwork"
                >
                  <span className="px-2 text-red-500 _hiddenM">
                    {t("header.WrongNetwork")}
                  </span>
                </Popover>
              </>
            )}
          </button>
        )}

        {location.pathname === "/" ? (
          <Link to="/dashboard" className="_hiddenM">
            <button className="launchApp">Launch APP</button>
          </Link>
        ) : (
          <button
            className={`btnStyle rounded-xl p-2 md:pl-4 md:pr-4 text-sm ${
              address ? "_borderW" : "_borderS pl-4 pr-4"
            }`}
          >
            {address ? (
              <Popover
                content={<AccountContent />}
                trigger="click"
                placement="bottomRight"
                arrow={false}
                color={"#111"}
                open={openUserAccount}
                onOpenChange={handleOpenChange}
                overlayClassName="accountInfo"
              >
                <div className="flex items-center justify-between">
                  <img
                    className="w-5"
                    src={require("../../asserts/imgs/connect.png")}
                    alt=""
                  />
                  <span className="pl-2 _hiddenM">
                    {shortStr(address, 5, 4)}
                  </span>
                  <img
                    className="w-3 ml-2 mt-0.5 _hiddenM"
                    src={require("../../asserts/imgs/walletDown.png")}
                    alt=""
                  />
                </div>
              </Popover>
            ) : (
              <span onClick={() => open()}>Connect Wallet</span>
            )}
          </button>
        )}
        {location.pathname !== "/" && (
          <div
            className="_hiddenP p-2 ml-2 btnStyle"
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            <img className="w-5" src={require("../../asserts/imgs/menu.png")} />
          </div>
        )}
      </div>
      <Drawer
        width={"100vw"}
        closeIcon={false}
        onClose={onClose}
        open={openDrawer}
      >
        <div className="drawerTitle Medium">
          <div className="h-16 flex items-center">
            <img
              className="h-7 mt-1 mb-1"
              src={require("../../asserts/imgs/logo.png")}
              alt=""
            />
            <div className="text-xl ml-2">Hive</div>
          </div>
          <div className="p-2 btnStyle">
            <img
              className="w-4"
              src={require("../../asserts/imgs/drawerClose.png")}
              onClick={onClose}
              alt=""
            />
          </div>
        </div>
        <div className="text-lg Medium">
          <p className="pt-5 pb-2 ml-6 text">Menu</p>
          <p className="pt-2 pb-5" onClick={onClose}>
            <Link
              className={`ml-6 mr-6  flex items-center justify-between ${
                location.pathname === "/dashboard" ? "activeTitle" : ""
              }`}
              to="/dashboard"
            >
              <span>Dashboard</span>
            </Link>
          </p>
          <p className="pt-2 pb-5" onClick={onClose}>
            <Link
              className={`ml-6 mr-6  flex items-center justify-between ${
                location.pathname === "/market" ? "activeTitle" : ""
              }`}
              to="/market"
            >
              <span>Markets</span>
            </Link>
          </p>
          <p className="pt-2 pb-5" onClick={onClose}>
            <Link
              className={`ml-6 mr-6  flex items-center justify-between ${
                location.pathname === "/liquidation" ? "activeTitle" : ""
              }`}
              to="/liquidation"
            >
              <span>Liquidation</span>
            </Link>
          </p>

          {/* <p
            className="pt-5 pb-5"
            onClick={() => setShowList((state) => (state = !state))}
          >
            <div className="ml-6 mr-6 flex items-center justify-between">
              <span>{t("header.Language")}</span>
              <div className="flex items-center">
                <span className="text-sm _text">{showLang(currentLang)}</span>
                <img
                  className={`w-4 ml-1 ${showList && "rotate-90"}`}
                  src={require("../../asserts/img/drawerRight.png")}
                  alt=""
                />
              </div>
            </div>
          </p>
          {showList && <LangList />} */}
        </div>

        {/* <div className="flex items-center justify-around absolute bottom-8 w-full">
          <div
            className="rounded-xl w-1/4 h-12"
            style={{ background: "#2a2539" }}
          >
            <a
              target="_blank"
              href="https://discord.com"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                className="w-5"
                src={require("../../asserts/img/discordM.png")}
                alt=""
              />
            </a>
          </div>
          <div
            className="rounded-xl w-1/4 h-12"
            style={{ background: "#2a2539" }}
          >
            <a
              target="_blank"
              href="https://twitter.com"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                className="w-5"
                src={require("../../asserts/img/twitterM.png")}
                alt=""
              />
            </a>
          </div>
          <div
            className="rounded-xl w-1/4 h-12"
            style={{ background: "#2a2539" }}
          >
            <a
              target="_blank"
              href="https://github.com/1ustd"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                className="w-5"
                src={require("../../asserts/img/githubM.png")}
                alt=""
              />
            </a>
          </div>
        </div> */}
      </Drawer>
    </div>
  );
};

export default Header;
