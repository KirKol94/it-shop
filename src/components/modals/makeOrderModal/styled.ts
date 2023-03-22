import styled from 'styled-components'
import { bp, colors, fonts } from '@/styled/vars'
import { RootButton } from '@root/RootButton'

export const Wrapper = styled.div`
  overflow-y: auto;
  height: 100%;
  border-radius: 16px;
  width: clamp(20rem, 10.227rem + 48.86vw, 46.875rem);
  padding: 20px;
  background-color: ${colors.violet};
  display: flex;
  gap: 10px;
  flex-direction: column;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: clamp(1.25rem, 0.795rem + 2.27vw, 2.5rem);
  line-height: 125%;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.neon};
`

export const CloseBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
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
  font-size: clamp(1rem, 0.455rem + 2.73vw, 2.5rem);
  line-height: 125%;
`

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 16px;

  ${bp.lg} {
    grid-template-columns: 1fr;
  }
`

export const Input = styled.input`
  color: ${colors.gray};
  border: 1px solid ${colors.gray};
  font-family: ${fonts.exo};
  font-style: normal;
  font-weight: 400;
  font-size: clamp(0.875rem, 0.83rem + 0.23vw, 1rem);
  line-height: clamp(1.063rem, 1.017rem + 0.23vw, 1.188rem);
  background-color: transparent;
  padding: clamp(0.688rem, 0.619rem + 0.34vw, 0.875rem) 22px;
`

export const Button = styled(RootButton)`
  align-self: center;
  width: 100%;
  max-width: 380px;
`
