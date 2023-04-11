import React, { FC, useLayoutEffect } from 'react'
import { RootContainer } from '@root/RootContainer'
import styled from 'styled-components'
import { useAppSelector } from '@/hooks/reduxHooks'

const Wrapper = styled(RootContainer)<{ headerHeight: number }>`
  padding-top: calc(${({ headerHeight }) => headerHeight}px + 40px);
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const PaymentAndDelivery: FC = () => {
  const headerHeight = useAppSelector(state => state.header.height)

  useLayoutEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <Wrapper headerHeight={headerHeight}>
      <h1>Оплата и доставка</h1>
      <p>Оплата на сбер, доставка по сдэк</p>
    </Wrapper>
  )
}

export default PaymentAndDelivery
