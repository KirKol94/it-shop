import styled from 'styled-components'
import { bp, colors } from '@/styled/vars'
import { RootButton } from '@root/RootButton'
import { InputText } from '@root/RootInput'

export const Wrapper = styled.div`
  overflow-y: auto;
  height: 100%;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  width: clamp(20rem, 10.227rem + 48.86vw, 46.875rem);
  padding: 20px;
  background-color: ${colors.violet};
  display: flex;
  gap: 10px;
  flex-direction: column;

  ${bp.sm} {
    width: 100%;
    padding: 10px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.25;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.neon};
`

export const CloseBox = styled.div`
  & svg {
    width: 26px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  column-gap: 20px;
`

export const FormTitle = styled.h3`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
`

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 16px;

  ${bp.md} {
    grid-template-columns: 1fr;
  }
`
export const OrderInput = styled(InputText)`
  background-color: ${colors.lightNeon};
`

export const Button = styled(RootButton)`
  align-self: center;
  width: 100%;
  max-width: 380px;
`
