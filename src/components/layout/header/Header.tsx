import React, { FC, useState } from 'react'
import Logo from '@ui/logo/Logo'
import AuthModal from '@/components/modals/authModal/AuthModal'
import RegisterModal from '@/components/modals/registerModal/RegisterModal'
import {
  CartBox,
  CartText,
  Container,
  HeaderAuthBtn,
  LoginBox,
  ProfileBox,
  Wrapper,
} from './styled'
import CartModal from '@/components/modals/cartModal/CartModal'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { setIsOpenCart } from '@/store/cart/cartSlice'
import CartIcon from '@ui/icons/CartIcon'
import useScroll from '@/hooks/useScroll'

const Header: FC = () => {
  const dispatch = useAppDispatch()

  const isCartOpen = useAppSelector(state => state.cart.isOpenCart)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const isScrolled = useScroll()

  return (
    <>
      <Wrapper isScrolled={isScrolled}>
        <Container>
          <Logo />

          <ProfileBox>
            <LoginBox>
              <HeaderAuthBtn onClick={() => setIsAuthOpen(true)}>
                Войти
              </HeaderAuthBtn>
              |
              <HeaderAuthBtn onClick={() => setIsRegisterOpen(true)}>
                Регистрация
              </HeaderAuthBtn>
            </LoginBox>

            <CartBox onClick={() => dispatch(setIsOpenCart(true))}>
              <CartIcon />
              <CartText>Корзина</CartText>
            </CartBox>
          </ProfileBox>
        </Container>
      </Wrapper>

      {isAuthOpen && (
        <AuthModal isOpen={isAuthOpen} setIsOpen={() => setIsAuthOpen(false)} />
      )}

      {isRegisterOpen && (
        <RegisterModal
          isOpen={isRegisterOpen}
          setIsOpen={() => setIsRegisterOpen(false)}
          setIsAuthModal={setIsAuthOpen}
        />
      )}

      {isCartOpen && <CartModal isOpen={isCartOpen} />}
    </>
  )
}

export default Header
