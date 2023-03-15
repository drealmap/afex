import React from 'react'
import { Sidebar } from './components/sidebar'
import { Container } from './components/container'
import { TickerTape } from './components/ticker-tape'

const Layout = () => {
  return (
    <div className=" w-screen ">
        <Sidebar />
        <Container />
        <TickerTape />
    </div>
  )
}

export default Layout