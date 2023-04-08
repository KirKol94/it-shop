import React, { FC } from 'react'

import CartModal from '@/components/modals/cartModal/CartModal'
import Footer from '../footer/Footer'
import Header from '@/components/layout/header/Header'
import MakeOrderModal from '@/components/modals/makeOrderModal/MakeOrderModal'
import MenuModal from '@/components/modals/menuModal/MenuModal'
import { Outlet } from 'react-router-dom'

const PageStructure: FC = () => {
  return (
    <>
      <Header />

      {/* тут будет меняться контент в зависимости от роута */}
      <Outlet />

      <Footer />

      {/* модалки */}
      <MenuModal />
      <CartModal />
      <MakeOrderModal />
    </>
  )
}

export default PageStructure
