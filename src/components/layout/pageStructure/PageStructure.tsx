import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '@/components/layout/header/Header'

const PageStructure: FC = () => {
  return (
    <>
      <Header />

      {/* тут будет меняться контент в зависимости от роута */}
      <Outlet />

      <Footer />
    </>
  )
}

export default PageStructure
