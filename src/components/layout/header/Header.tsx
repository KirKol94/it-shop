import React, { FC, useEffect, useRef, useState } from 'react'
import AuthModal from '@/components/modals/authModal/AuthModal'
import RegisterModal from '@/components/modals/registerModal/RegisterModal'
import {
  BurgerIcon,
  CartBox,
  CartText,
  Container,
  HeaderAuthBtn,
  LoginBox,
  LogoBox,
  Nav,
  NavItem,
  NavList,
  ProfileBox,
  Wrapper,
} from './styled'
import CartModal from '@/components/modals/cartModal/CartModal'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { setIsOpenCart } from '@/store/cart/cartSlice'
import useScroll from '@/hooks/useScroll'
import { ReactComponent as Cart } from '@/assets/svg/cart.svg'
import { Link } from 'react-router-dom'
import { setHeight } from '@/store/header/headerSlice'

const Header: FC = () => {
  const dispatch = useAppDispatch()

  const isCartOpen = useAppSelector(state => state.cart.isOpenCart)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const isScrolled = useScroll()

  const links = [
    { name: 'Главная', url: '' },
    { name: 'Каталог', url: '' },
    { name: 'О нас', url: 'about' },
    { name: 'Оплата и доставка', url: '' },
  ]

  // отдаём высоту хедера в PageStructure
  const headerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        dispatch(setHeight(headerRef.current.offsetHeight))
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [headerRef])

  return (
    <>
      <Wrapper ref={headerRef} isScrolled={isScrolled}>
        <Container>
          <Link to="">
            <LogoBox />
          </Link>

          <Nav>
            <NavList>
              {links.map((link, i) => (
                <NavItem key={i}>
                  <Link to={link.url}>{link.name}</Link>
                </NavItem>
              ))}
            </NavList>
          </Nav>

          <BurgerIcon />

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
              <Cart />
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
