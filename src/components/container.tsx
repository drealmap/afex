import React, { useEffect, useState } from "react";
import right from "../assets/right.svg";
import candle from "../assets/candle.svg";
import down from "../assets/arrow-down.svg";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";


export const Container = () => {

  interface Trade {
    id: string;
    price: number;
    // ... other properties of a trade
  }
  


  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    const socket = new WebSocket('wss://comx-sand-api.afexnigeria.com/stream/trades');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(event.data)
      setTrades((prevTrades) => [...prevTrades, data]);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="w-[94vw] bg-[#FAFBFC] h-full min-h-screen p-6 ml-[6vw]">
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
        <div className=""></div>
      </div>
    </div>
  );
};
