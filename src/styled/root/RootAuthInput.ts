import styled from 'styled-components'
import { colors, fonts } from '@/styled/vars'

export const RootAuthInput = styled.input`
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  width: 100%;
  display: block;
  padding: 18px 22px;
  background-color: transparent;
  font-family: ${fonts.exo};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.gray};

  &:active,
  &:focus {
    border: 1px solid ${colors.white};
    color: ${colors.white};
  }
`
