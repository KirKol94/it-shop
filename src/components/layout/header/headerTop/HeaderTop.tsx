import React, { FC, useState } from 'react'
import VkIcon from '@ui/icons/VkIcon'
import Logo from '@ui/logo/Logo'
import AuthModal from '@/components/modals/authModal/AuthModal'
import RegisterModal from '@/components/modals/registerModal/RegisterModal'
import {
  CartBox,
  CartText,
  Container,
  HeaderAuthBtn,
  LoginBox,
  Media,
  ProfileBox,
  Wrapper,
} from './styled'
import CartModal from '@/components/modals/cartModal/CartModal'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { setIsOpenCart } from '@/store/cart/cartSlice'

const HeaderTop: FC = () => {
  const dispatch = useAppDispatch()
  const isCartOpen = useAppSelector(state => state.cart.isOpenCart)

  const media = [
    { name: 'vk', link: 'https://vk.com/1' },
    { name: 'vk', link: 'https://vk.com/2' },
    { name: 'vk', link: 'https://vk.com/3' },
    { name: 'vk', link: 'https://vk.com/4' },
  ]

  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  return (
    <>
      <Wrapper>
        <Container>
          <Media>
            {media.map(({ name, link }) => (
              <li key={link}>
                <a href={link} target="_blank" title={name} rel="noreferrer">
                  <VkIcon />
                </a>
              </li>
            ))}
          </Media>

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
              <VkIcon />
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

export default HeaderTop
