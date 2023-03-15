import React, { useEffect, useState } from "react";
import right from "../assets/right.svg";
import candle from "../assets/candle.svg";
import down from "../assets/arrow-down.svg";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import Cipher from "@ibnlanre/cipher";
import BasicCard from "./basic-card";
import { Tabs } from "./tabs";
import { Board } from "./board";
import { TradeLog } from "./trade-log";

export const Container = () => {
  interface wallet {
    balance: any;
    loan: any
    security: any
  }

  const encryption_key = "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0";
  const initialization_vector = "hA7wB3e4v87ihj6R";

  const cipher = new Cipher({
    initialization_vector,
    algorithm: "aes-256-cbc",
    output_decoding: "base64",
    input_encoding: "utf-8",
    encryption_key,
  });

  const { encrypt, decrypt } = cipher;

  const [wallet, setWallet] = useState<wallet>({ balance: 0, loan: 0, security: 0});

  useEffect(() => {
    const socket = new WebSocket(
      "wss://comx-sand-api.afex.dev/stream/client-positions?cid=9900153747"
    );

    const socket2 = new WebSocket("wss://comx-sand-api.afex.dev/stream/trades")

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const decryptedData = decrypt(data.wallets)
      console.log(data.wallets)
      const balance = decrypt(data.wallets.available_balance);
      const loan = decrypt(data.wallets.loan_repayment_balance);
      const security = decrypt(data.wallets.loan_repayment_balance);
      setWallet({balance, loan, security})
      // setTrades((prevTrades) => [...prevTrades, data]);
    };
    socket2.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data.messages)
      const decryptedData = decrypt(data.messages?.map((message: any) => message.board_type))
      console.log(decryptedData)
      // const balance = decrypt(data.wallets.available_balance);
      // const loan = decrypt(data.wallets.loan_repayment_balance);
      // const security = decrypt(data.wallets.loan_repayment_balance);
      // console.log(decryptedData);
      // console.log(data)
      // setWallet({balance, loan, security})
      // setTrades((prevTrades) => [...prevTrades, data]);
    };



    return () => {
      socket.close();
      socket2.close();
    };
  }, []);

  useEffect(() => {
    fetch ("https://comx-sand-api.afex.dev/api/securities/boards?format=json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
       console.log(response)
      });
  }, [])

  return (
    <div className=" overflow-x-hidden bg-[#FAFBFC] h-full min-h-screen p-6 ml-[6vw]">
      <div className="flex font-switzer font-medium text-sm text-[#5F6D7E] items-center">
        Home
        <img src={right} alt="" />
        <span className=" text-[#D71E0E] -tracking-[0.1px] ">Market</span>
      </div>

      <div className="flex flex-col mt-7 gap-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1 font-switzer">
            <h2 className=" font-semibold text-[28px] leading-[38px] -tracking-[0.01em] text-[#1F1F1F] ">
              Market
            </h2>
            <p className=" text-base font-normal text-[#5F6D7E] ">
              Lorem ipsum dolor sit amet consectetur. Adipiscing egestas{" "}
            </p>
          </div>
          <div className=" flex text-sm font-semibold text-[#1F1F1F] gap-5 ">
            <button
              className="bg-white border py-2.5 px-4 border-[#DAE0E6] rounded"
              type="button"
            >
              Page Setting
              <img className="inline ml-1" src={candle} alt="" />
            </button>
            <button
              className="bg-white border py-2.5 px-4 border-[#DAE0E6] rounded"
              type="button"
            >
              Demo
              <img className="inline ml-1" src={down} alt="" />
            </button>
          </div>
        </div>
        <div className=" grid grid-flow-col gap-5 ">
          <BasicCard title="Cash Balance" amount={wallet.balance} direction="Decline" />
          <BasicCard title="Securities Value" amount={wallet.security} direction="Decline" />
          <BasicCard title="Loan Balance" amount={wallet.loan} direction="Increment" />
        </div>
        <Tabs />
      </div>

      <div className="my-8 grid grid-flow-col gap-6">
        <Board boardType="Buy" />
        <Board boardType="Sell" />
      </div>

      <div className=" mb-40">
        <TradeLog boardType="Trade Logs" />
      </div>
    </div>
  );
};
