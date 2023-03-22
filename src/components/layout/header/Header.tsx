import React, { FC, useEffect, useRef, useState } from 'react'
import {
  AuthAndCart,
  BurgerIcon,
  Container,
  LogoBox,
  Nav,
  Wrapper,
} from './styled'
import { useAppDispatch } from '@/hooks/reduxHooks'
import useScroll from '@/hooks/useScroll'
import { Link } from 'react-router-dom'
import { setHeight } from '@/store/header/headerSlice'
import Navigation from '@ui/navigation/Navigation'
import AuthAndCartBox from '@ui/authAndCartBox/AuthAndCartBox'
import { setIsOpenMenu } from '@/store/dialogWindows/dialogWindowsSlice'
import useScrollDirection from '@/hooks/useScrollDirection'

const Header: FC = () => {
  const dispatch = useAppDispatch()

  const showMenu = () => dispatch(setIsOpenMenu(true))

  const isScrolled = useScroll()
  const { scrollDirection } = useScrollDirection()

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
        <Link to="">
          <LogoBox />
        </Link>

        <BurgerIcon onClick={showMenu} />

        <Nav>
          <Navigation />
        </Nav>

        <AuthAndCart>
          <AuthAndCartBox />
        </AuthAndCart>
      </Container>
    </Wrapper>
  )
}

export default Header
