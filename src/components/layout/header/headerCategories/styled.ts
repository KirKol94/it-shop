import styled from 'styled-components'
import { bgColors, borderColors, fonts, textColors } from '@/styled/vars'
import { RootContainer } from '@/styled/root'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${borderColors.gray};
  background-color: ${bgColors.accent};
`

export const Container = styled(RootContainer)`
  display: flex;
  min-height: 64px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  row-gap: 8px;
`

export const List = styled.ul`
  display: flex;
  gap: 32px;
  overflow-x: auto;
`

export const CategoryLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${textColors.main};
  font-family: ${fonts.main};
  font-size: 20px;
  font-weight: 500;
  gap: 9px;
  line-height: 24px;
  white-space: nowrap;
`

export const InputBox = styled.div`
  position: relative;
  display: flex;
  height: calc(100% - 16px);
  align-items: center;
  opacity: 0.5;

  &:focus-within {
    opacity: 1;
  }
`

export const Input = styled.input`
  height: 100%;
  padding: 12px 20px;
  border: 1px solid ${borderColors.white};
  border-radius: 4px;
  background-color: transparent;
  color: ${textColors.main};
  font-family: ${fonts.main};
  font-size: 20px;
  line-height: 24px;

  ::placeholder {
    color: ${textColors.main};
    opacity: 1;
  }
`

export const SearchIconBox = styled.div`
  position: absolute;
  right: 20px;
`
