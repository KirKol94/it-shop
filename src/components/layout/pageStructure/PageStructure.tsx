import React, { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '@/components/layout/header/Header'
import styled from 'styled-components'

const OutletContainer = styled.div<{ headerHeight: number }>`
  padding-top: ${({ headerHeight }) => headerHeight}px;
`

const PageStructure: FC = () => {
  const [headerHeight, setHeaderHeight] = useState(0)

  return (
    <>
      <Header setHeaderHeight={setHeaderHeight} />

      {/* тут будет меняться контент в зависимости от роута */}
      <OutletContainer headerHeight={headerHeight}>
        <Outlet />
      </OutletContainer>

      <Footer />
    </>
  )
}

export default PageStructure
