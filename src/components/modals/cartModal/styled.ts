import styled from 'styled-components'
import {
  bgColors,
  borderColors,
  fonts,
  textColors,
  gradients,
} from '@/styled/vars'
import { RootButton } from '@/styled/root'

export const Wrapper = styled.div`
  height: 100%;
  border-radius: 16px;
  width: 560px;
  padding: 20px;
  background-color: ${bgColors.darkViolet};
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
`

export const CartTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Title = styled.h2`
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: 26px;
  line-height: 125%;
  padding-bottom: 10px;
  border-bottom: 1px solid ${borderColors.neon};
`

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`

export const CartBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 30px;
  }
  &::-webkit-scrollbar-track {
    background: ${gradients.main};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${bgColors.indigo};
    border-radius: 6px;
    border: 3px solid #18042f;
  }
`

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CartFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 16px;
  padding: 0 16px;
`

export const CartInfoRow = styled.div`
  font-family: ${fonts.exo};
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span:last-child {
    font-weight: 700;
  }

  & > div {
    flex: 1 1 auto;
  }
`

export const PromoLabel = styled.label`
  color: ${textColors.gray};
  font-family: ${fonts.exo};
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: center;
`

export const PromoSaleSize = styled.span`
  align-self: flex-start;
  font-family: ${fonts.exo};
  font-weight: 700;
  color: ${textColors.neon};
`

export const InfoFinal = styled(CartInfoRow)`
  font-family: ${fonts.exo};
  font-weight: 700;
  font-size: 20px;
`

export const PromoInput = styled.input`
  flex: 1 1 auto;
  border-bottom: 1px solid ${borderColors.neon};
  color: ${textColors.main};
  padding: 8px;
  background-color: transparent;
`

export const CartFooterAction = styled(RootButton)`
  align-self: center;
  width: 100%;
  max-width: 380px;
`
