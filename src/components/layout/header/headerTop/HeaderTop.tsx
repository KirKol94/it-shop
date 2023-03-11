import React, { FC, useState } from 'react'
import VkIcon from '../../../icons/VkIcon'
import Logo from '../../../ui/logo/Logo'
import AuthModal from '../../../modals/authModal/AuthModal'
import RegisterModal from '../../../modals/registerModal/RegisterModal'
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

const HeaderTop: FC = () => {
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
            <CartBox to="cart">
              <VkIcon />
              <CartText>Корзина</CartText>
            </CartBox>
          </ProfileBox>
        </Container>
      </Wrapper>

      <AuthModal isOpen={isAuthOpen} setIsOpen={() => setIsAuthOpen(false)} />
      <RegisterModal
        isOpen={isRegisterOpen}
        setIsOpen={() => setIsRegisterOpen(false)}
      />
    </>
  )
}

export default HeaderTop
