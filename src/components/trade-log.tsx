import React from "react";

type TradeProps = {
  orderItems?: {
    id: string;
  }[];
  boardType: string;
};

export const TradeLog = ({ orderItems, boardType }: TradeProps) => {
  return (
    <div className="flex flex-col gap-2.5 bg-white border border-[#EAEBF0] rounded-[10px]">
      <div className=" py-4 px-6 isolate ">
        <h6 className=" font-switzer font-semibold text-lg leading-6 text-[#1F1F1F] ">
          {boardType}
        </h6>
      </div>
      <div className=" grid grid-cols-8 border-y border-[#EAEBF0] ">
        <div className=" col-span-2 py-3 px-6 font-switzer ">
          <p className="  text-sm leading-[18px] text-[#5F6D7E] ">Security</p>
        </div>
        <div className=" col-span-1 py-3 px-6 font-switzer ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Board</p>
        </div>
        <div className=" col-span-1 py-3 px-6 font-switzer ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Order Type</p>
        </div>
        <div className=" col-span-1 py-3 px-6 font-switzer ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">
            Matched Price
          </p>
        </div>
        <div className=" col-span-1 py-3 px-6 font-switzer ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Quantity</p>
        </div>
        <div className=" col-span-1 py-3 px-6 font-switzer ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Date</p>
        </div>
        <div className=" col-span-1 py-3 px-6 font-switzer ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Time</p>
        </div>
      </div>

      {orderItems?.map((order, index) => {
        return (
          <div
            key={order.id}
            className="grid grid-cols-8 border-y border-[#EAEBF0] "
          >
            <div className=" col-span-2 py-3 px-6 font-switzer ">
              <p className="  text-sm leading-[18px] text-[#5F6D7E] ">
                Security
              </p>
            </div>
            <div className=" col-span-1 py-3 px-6 font-switzer ">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Board</p>
            </div>
            <div className=" col-span-1 py-3 px-6 font-switzer ">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">
                Order Type
              </p>
            </div>
            <div className=" col-span-1 py-3 px-6 font-switzer ">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">
                Matched Price
              </p>
            </div>
            <div className=" col-span-1 py-3 px-6 font-switzer ">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">
                Quantity
              </p>
            </div>
            <div className=" col-span-1 py-3 px-6 font-switzer ">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Date</p>
            </div>
            <div className=" col-span-1 py-3 px-6 font-switzer ">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Time</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
