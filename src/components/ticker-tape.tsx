import React from 'react'
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';

export const TickerTape = () => {
  return (
    <footer className='ml-[6vw] '>
        <div className=' bg-[#000000] z-10 fixed bottom-0 inline font-switzer font-medium text-lg leading-6 py-3.5 px-[34px] text-white '>Live Market</div>
        <div className=" inline fixed bottom-0 ">
        <Ticker slideSpeed={20}>
          <FinancialTicker id={1} change={true} symbol="Dummy" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id={2} change={true} symbol="Holder" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id={3} change={true} symbol="Text" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id={4} change={false} symbol="Symbol" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
        </Ticker>
        </div>
    </footer>
  )
}
 