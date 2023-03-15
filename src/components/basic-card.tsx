import * as React from "react";


type BasicCardProps = {
    title: string
    amount: string
    direction: 'Decline' | 'Increment'
}

export default function BasicCard( {title, amount, direction}: BasicCardProps ) {
  return (
    <div className=" font-switzer bg-white flex flex-col rounded-[10px] ">
      <div className=" py-4 px-5 ">
        <h6 className=" text-base font-medium -tracking-[0.1px] text-[#1F1F1F] ">
          {title}
        </h6>
      </div>
      <div className="flex pt-0 px-5 pb-4">
        <div className="flex flex-col gap-3 ">
            <h5 className=" font-semibold text-[28px] leading-[38px] text-[#1F1F1F] ">₦ {amount.toLocaleString()}</h5>
            <div className="flex gap-2 ">
                <button type="button" className="py-[2px] bg-[#FFF2F0] rounded font-medium text-xs leading-[18px] text-[#E2341D] px-2 ">{direction}</button>
                <p className="py-[2px] rounded font-medium text-sm text-[#5F6D7E] px-2 ">Monitored Monthly</p>
            </div>
        </div>
        <div className="">Chart</div>
      </div>
    </div>
  );
}
