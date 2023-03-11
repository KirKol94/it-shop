import styled from 'styled-components'
import Logo from '../../ui/logo/Logo'
import { borderColors, fonts, textColors } from '../../../styled/vars'
import { Link } from 'react-router-dom'

export const RegModalWrapper = styled.div`
  width: 480px;
  padding: 16px;
  border-radius: 32px;
  backdrop-filter: blur(14px);
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const StyledLogo = styled(Logo)``

export const Title = styled.p`
  text-align: center;
  color: ${textColors.main};
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const Input = styled.input`
  border: 1px solid ${borderColors.gray};
  border-radius: 4px;
  width: 100%;
  display: block;
  padding: 18px 22px;
  background-color: transparent;
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${textColors.gray};

  &:active,
  &:focus {
    border: 1px solid ${borderColors.white};
    color: ${textColors.main};
  }
`

export const Privacy = styled.p`
  font-family: ${fonts.second};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 125%;
  text-align: center;
  color: ${textColors.gray};
`

export const PrivacyLink = styled(Link)`
  font-weight: 700;
  color: ${textColors.brown};
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${textColors.gray};
`
