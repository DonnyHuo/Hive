import { useEffect, useState } from "react";
import { Button, Modal, Switch } from "antd";
import { useSelector, useDispatch } from "react-redux";

const SupplyModal = () => {
  const withdrawModel = useSelector((state) => state.withdrawModel);
  const dispatch = useDispatch();
  const handleOk = () => {
    dispatch({ type: "CHANGE_WITHDRAW_MODEL", payload: false });
  };
  const handleCancel = () => {
    dispatch({ type: "CHANGE_WITHDRAW_MODEL", payload: false });
  };
  return (
    <Modal
      title="Withdraw ETH"
      destroyOnClose={true}
      centered
      maskClosable={false}
      footer={false}
      closeIcon={
        <img
          className="w-7 mt-3 mr-2"
          src={require("../../asserts/imgs/closeModal.png")}
          alt=""
        />
      }
      width={450}
      zIndex={3000}
      open={withdrawModel}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div>
        <p className="mb-2 Light">Amount</p>
        <div className="listBorder rounded-lg p-4">
          <div className="flex items-center justify-between">
            <input
              className="w-2/3 bg-transparent text-lg"
              placeholder="0"
              type="text"
            />
            <div className="flex items-center">
              <img
                className="w-6 mr-2"
                src={require("../../asserts/imgs/eths.png")}
              />
              <span className="text-lg">ETH</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5 text-sm">
            <span className="Light">$6234.08</span>
            <div className="flex items-center">
              <div>
                Wallet balance:<span>321.26</span>
              </div>
              <button className="ml-4 Light">MAX</button>
            </div>
          </div>
        </div>
        <div className="flex items-center my-5">
          <Switch size="small"></Switch>
          <span className="ml-2">Unwrap WETH(to withdraw ETH)</span>
        </div>
        <p className="mt-4 mb-2 Light">Transaction overview</p>
        <div className="listBorder rounded-lg p-4  Light text-sm">
          <div className="flex items-center justify-between">
            <span className="text">Remaining supply</span>
            <div className="flex items-center">
              <span className="Medium">0.10000000 ETH</span>
            </div>
          </div>
          <div className="flex items-start justify-between mt-2">
            <span className="text"> Health factor</span>
            <div>
              <div className="flex items-center justify-end">
                <span className="activeTitle Medium">1.02</span>
                <img
                  className="w-4 ml-1"
                  src={require("../../asserts/imgs/change.png")}
                />
                <span className="orange Medium">2.05</span>
              </div>
              <div className="text">{"Liquidation at < 1.0"}</div>
            </div>
          </div>
        </div>
        <div className="flex items-start mt-2">
          <img
            className="w-5"
            src={require("../../asserts/imgs/fee.png")}
          />
          <span className="mx-1 text">$0.6</span>
          <img
            className="w-4 mt-0.5"
            src={require("../../asserts/imgs/tips.png")}
          />
        </div>
        <Button className="w-full mt-20 h-12 text-base">Withdraw ETH</Button>
      </div>
    </Modal>
  );
};

export default SupplyModal;
