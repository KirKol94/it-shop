import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import HeaderCategories from '../header/headerCategories/HeaderCategories'
import styled from 'styled-components'

const StyledPageStructure = styled.div`
  position: relative;
`

const PageStructure: FC = () => (
  <StyledPageStructure>
    <Header />
    <HeaderCategories />

    {/* тут будет меняться контент в зависимости от роута */}
    <Outlet />

    <Footer />
  </StyledPageStructure>
)

export default PageStructure
