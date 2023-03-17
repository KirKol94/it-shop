import styled from 'styled-components'
import { bgColors, borderColors, fonts, textColors } from '@/styled/vars'
import { RootButton } from '@/styled/root'

export const Wrapper = styled.div`
  height: 100%;
  border-radius: 16px;
  width: 750px;
  padding: 20px;
  background-color: ${bgColors.darkViolet};
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
`

export const CartTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Title = styled.h2`
  font-family: ${fonts.second};
  font-weight: 700;
  font-size: 40px;
  line-height: 125%;
  padding-bottom: 20px;
  border-bottom: 1px solid ${borderColors.neon};
`

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`

export const CartBody = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

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
  padding: 16px;
`

export const CartFooterTitle = styled(Title)`
  font-size: 24px;
  font-weight: 600;
  padding: 0;
  border: 0;
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
  color: ${textColors.gray};
`

export const PromoSaleSize = styled.span`
  color: ${textColors.neon};
`

export const InfoFinal = styled(CartInfoRow)`
  font-size: 20px;

  &:last-child {
    font-size: 24px;
  }
`

export const PromoInput = styled.input`
  width: 380px;
  border-bottom: 1px solid ${borderColors.neon};
  color: ${textColors.main};
  padding: 16px;
  background-color: transparent;
`

export const CartFooterAction = styled(RootButton)`
  width: 100%;
`
