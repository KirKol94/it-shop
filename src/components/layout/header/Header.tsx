import React, { FC, useEffect, useRef, useState } from 'react'
import AuthModal from '@/components/modals/authModal/AuthModal'
import RegisterModal from '@/components/modals/registerModal/RegisterModal'
import {
  AuthAndCart,
  BurgerIcon,
  Container,
  LogoBox,
  Nav,
  Wrapper,
} from './styled'
import CartModal from '@/components/modals/cartModal/CartModal'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import useScroll from '@/hooks/useScroll'
import { Link } from 'react-router-dom'
import { setHeight } from '@/store/header/headerSlice'
import MenuModal from '@/components/modals/menuModal/MenuModal'
import Navigation from '@ui/navigation/Navigation'
import AuthAndCartBox from '@ui/authAndCartBox/AuthAndCartBox'

const Header: FC = () => {
  const dispatch = useAppDispatch()

  const isCartOpen = useAppSelector(state => state.cart.isOpenCart)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScroll()

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

          <BurgerIcon onClick={() => setIsMenuOpen(true)} />

          <Nav>
            <Navigation
              setIsOpenMenu={() => {
                console.log()
              }}
            />
          </Nav>

          <AuthAndCart>
            <AuthAndCartBox
              setIsAuthOpen={setIsAuthOpen}
              setIsRegisterOpen={setIsRegisterOpen}
              setIsOpenMenu={() => console.log()}
            />
          </AuthAndCart>
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

      {isMenuOpen && (
        <MenuModal
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          setIsAuthOpen={setIsAuthOpen}
        />
      )}
    </>
  )
}

export default Header
