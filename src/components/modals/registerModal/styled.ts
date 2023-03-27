import styled from 'styled-components'
import { fonts, colors } from '@/styled/vars'
import { Link } from 'react-router-dom'

export const Privacy = styled.p`
  font-family: ${fonts.exo};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 125%;
  text-align: center;
  color: ${colors.gray};
`

export const PrivacyLink = styled(Link)`
  font-family: ${fonts.exo};
  font-weight: 400;
  color: ${colors.gray};
`
