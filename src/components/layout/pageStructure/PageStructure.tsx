import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '@/components/layout/header/Header'
import MenuModal from '@/components/modals/menuModal/MenuModal'
import CartModal from '@/components/modals/cartModal/CartModal'
import MakeOrderModal from '@/components/modals/makeOrderModal/MakeOrderModal'
import AuthModal from '@/components/modals/authModal/AuthModal'
import RegisterModal from '@/components/modals/registerModal/RegisterModal'

const PageStructure: FC = () => {
  return (
    <>
      <Header />

      {/* тут будет меняться контент в зависимости от роута */}
      <Outlet />

      <Footer />

      {/* модалки */}
      <AuthModal />
      <RegisterModal />
      <MenuModal />
      <CartModal />
      <MakeOrderModal />
    </>
  )
}

export default PageStructure
