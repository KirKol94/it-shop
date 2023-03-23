import styled from 'styled-components'
import { colors, fonts } from '@/styled/vars'

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  font-family: ${fonts.exo};
  font-weight: 400;

  & > input:focus + label,
  & > input:not(:placeholder-shown) + label {
    transform: translateY(-20px) scale(0.75);
    color: ${colors.white};
  }
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  display: block;
  background-color: transparent;
  color: ${colors.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  pointer-events: none;
  text-align: left;
  transform: translateY(-50%);
  transform-origin: 0 0;
  transition: all 200ms cubic-bezier(0.25, 0.8, 0.25, 1);
  white-space: pre-wrap;
  will-change: transform;
`

export const InputText = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 18px 10px 6px;
  border-radius: 4px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: border-color 0.3s;
  color: ${colors.white};
`
