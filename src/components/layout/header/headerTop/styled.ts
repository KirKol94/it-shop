import styled from 'styled-components'
import { bgColors, borderColors, textColors } from '@/styled/vars'
import { RootContainer } from '@/styled/root'

export const Wrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${borderColors.gray};
  background-color: ${bgColors.accent};
`

export const Container = styled(RootContainer)`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const Media = styled.ul`
  display: flex;
  gap: 24px;
`

export const ProfileBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 27px;
`

export const LoginBox = styled.div`
  display: flex;
  color: ${textColors.gray};
  font-size: 20px;
  gap: 4px;
  line-height: 24px;
`

export const HeaderAuthBtn = styled.button`
  color: ${textColors.gray};
  cursor: pointer;
  font-size: 20px;
  line-height: 24px;

  &:hover {
    color: ${textColors.main};
  }
`

export const CartBox = styled.button`
  display: flex;
  align-items: center;
  color: ${textColors.main};
  gap: 8px;
`

export const CartText = styled.span`
  font-size: 20px;
  line-height: 24px;
`
