import {
  BurgerIcon,
  CartWrapper,
  Container,
  MobileIcons,
  Nav,
  Wrapper,
} from './styled'
import React, { FC, useEffect, useRef, useState } from 'react'
import {
  setIsOpenCart,
  setIsOpenMenu,
} from '@/store/dialogWindows/dialogWindowsSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

import { ReactComponent as Cart } from '@/assets/svg/cart.svg'
import CartBox from '@/components/ui/cartBox/CartBox'
import Logo from '@/components/ui/Logo/Logo'
import Navigation from '@ui/navigation/Navigation'
import { RootCartIconWrapper } from '@/styled/root/RootCartIconWrapper'
import { setHeight } from '@/store/header/headerSlice'
import useScroll from '@/hooks/useScroll'
import useScrollDirection from '@/hooks/useScrollDirection'

const Header: FC = () => {
  const dispatch = useAppDispatch()

  const showMenu = () => dispatch(setIsOpenMenu(true))
  const showCart = () => dispatch(setIsOpenCart(true))

  const isScrolled = useScroll()
  const { scrollDirection } = useScrollDirection()

  const theNumberOfProductsInTheBasket = useAppSelector(
    state => state.cart.items
  ).length

  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up')

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

  useEffect(() => {
    setScrollDir(scrollDirection)
  }, [scrollDirection])

  return (
    <Wrapper
      ref={headerRef}
      isScrolled={isScrolled}
      scrollDirection={scrollDir}>
      <Container>
        <Logo />

        <MobileIcons>
          <RootCartIconWrapper
            onClick={showCart}
            itemsCount={theNumberOfProductsInTheBasket}>
            <Cart />
          </RootCartIconWrapper>
          <BurgerIcon onClick={showMenu} />
        </MobileIcons>

        <Nav>
          <Navigation />
        </Nav>

        <CartWrapper>
          <CartBox />
        </CartWrapper>
      </Container>
    </Wrapper>
  )
}

export default Header
