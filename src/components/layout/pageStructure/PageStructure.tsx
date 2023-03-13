import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import HeaderCategories from '../header/headerCategories/HeaderCategories'
import styled from 'styled-components'
import HeaderTop from '@/components/layout/header/headerTop/HeaderTop'

const StyledPageStructure = styled.div`
  position: relative;
`

const PageStructure: FC = () => (
  <StyledPageStructure>
    <HeaderTop />
    <HeaderCategories />

    {/* тут будет меняться контент в зависимости от роута */}
    <Outlet />

    <Footer />
  </StyledPageStructure>
)

export default PageStructure
