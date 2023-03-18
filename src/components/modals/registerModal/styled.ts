import styled from 'styled-components'
import { fonts, textColors } from '@/styled/vars'
import { Link } from 'react-router-dom'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const Privacy = styled.p`
  font-family: ${fonts.exo};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 125%;
  text-align: center;
  color: ${textColors.gray};
`

export const PrivacyLink = styled(Link)`
  font-family: ${fonts.exo};
  font-weight: 400;
  color: ${textColors.gray};
`
