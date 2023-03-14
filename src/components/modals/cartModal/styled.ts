import styled from 'styled-components'
import { bgColors, borderColors, fonts, textColors } from '@/styled/vars'
import { RootButton } from '@/styled/root'

export const Wrapper = styled.div`
  height: 100%;
  border-radius: 16px;
  width: 750px;
  padding: 20px;
  background-color: ${bgColors.menu};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CartTop = styled.div``

export const Title = styled.h2`
  font-family: ${fonts.second};
  font-weight: 700;
  font-size: 40px;
  line-height: 125%;
`

export const CartBody = styled.div``

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CartFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  background-color: ${bgColors.darkBlock};
  padding: 16px;
`

export const CartFooterTitle = styled(Title)`
  font-size: 24px;
  font-weight: 600;
`

export const CartInfoRow = styled.div`
  font-family: ${fonts.main};
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    font-weight: 600;
  }
`

export const PromoLabel = styled.label`
  color: ${textColors.brown};
`

export const PromoSaleSize = styled.span`
  color: ${textColors.brown};
`

export const InfoFinal = styled(CartInfoRow)`
  font-size: 20px;

  &:last-child {
    font-size: 24px;
  }
`

export const PromoInput = styled.input`
  width: 380px;
  border-bottom: 1px solid ${borderColors.brown};
  color: ${textColors.main};
  padding: 16px;
  background-color: transparent;
`

export const CartFooterAction = styled(RootButton)`
  width: 100%;
`
