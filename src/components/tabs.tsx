import React from "react";

export const Tabs = () => {
  return (
    <div>
      <div className="border-b text-[15px] leading-[22px] text-[#5F6D7E] font-switzer font-medium -tracking-[0.1px] border-gray-200 dark:border-gray-700">
        <nav className="flex gap-6 " aria-label="Tabs" role="tablist">
          <div
            className="active:font-semibold cursor-pointer active:border-[#D71E0E] active:text-[#D71E0E] pb-4 px-1 inline-flex items-center border-b border-transparent whitespace-nowrap hover:text-[#D71E0E]"
            role="tab"
          >
            Product View{" "}
          </div>
          <button
            type="button"
            className="font-semibold text-[#D71E0E] border-[#D71E0E] text-sm pb-4 px-1 inline-flex items-center gap-2 border-b whitespace-nowrap"
            id="tabs-with-badges-item-2"
            role="tab"
          >
            Order Book{" "}
          </button>
          <div
            className="active:font-semibold cursor-pointer active:border-[#D71E0E] active:text-[#D71E0E] pb-4 px-1 inline-flex items-center border-b border-transparent whitespace-nowrap hover:text-[#D71E0E]"
            role="tab"
          >
            Price History{" "}
          </div>
          <div
            className="active:font-semibold cursor-pointer active:border-[#D71E0E] active:text-[#D71E0E] pb-4 px-1 inline-flex items-center border-b border-transparent whitespace-nowrap hover:text-[#D71E0E]"
            role="tab"
          >
            Open Orders{" "}
            <span className="active:bg-blue-100 active:text-blue-600 dark:active:bg-blue-800 dark:active:text-white ml-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              10
            </span>
          </div>
          <div
            className="active:font-semibold cursor-pointer active:border-[#D71E0E] active:text-[#D71E0E] pb-4 px-1 inline-flex items-center border-b border-transparent whitespace-nowrap hover:text-[#D71E0E]"
            role="tab"
          >
            Closed Trades{" "}
            <span className="active:bg-blue-100 active:text-blue-600 dark:active:bg-blue-800 dark:active:text-white ml-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              20
            </span>
          </div>
          <div
            className="active:font-semibold cursor-pointer active:border-[#D71E0E] active:text-[#D71E0E] pb-4 px-1 inline-flex items-center border-b border-transparent whitespace-nowrap hover:text-[#D71E0E]"
            id="tabs-with-badges-item-1"
            role="tab"
          >
            Canceled Trades{" "}
            <span className="active:bg-blue-100 active:text-blue-600 dark:active:bg-blue-800 dark:active:text-white ml-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              20
            </span>
          </div>
        </nav>
      </div>

      {/*hhhjkkkkkk*/}

      {/* <div className="mt-3">
        <div
          id="tabs-with-badges-1"
          role="tabpanel"
          aria-labelledby="tabs-with-badges-item-1"
        >
          <p className="text-gray-500 dark:text-gray-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-gray-200">
              first
            </em>{" "}
            item's tab body.
          </p>
        </div>
        <div
          id="tabs-with-badges-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-badges-item-2"
        >
          <p className="text-gray-500 dark:text-gray-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-gray-200">
              second
            </em>{" "}
            item's tab body.
          </p>
        </div>
        <div
          id="tabs-with-badges-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-badges-item-3"
        >
          <p className="text-gray-500 dark:text-gray-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-gray-200">
              third
            </em>{" "}
            item's tab body.
          </p>
        </div>
      </div> */}
    </div>
  );
};
