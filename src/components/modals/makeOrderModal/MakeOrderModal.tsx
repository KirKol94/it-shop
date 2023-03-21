import React, { Dispatch, FC } from 'react'
import Menu from '@ui/menu/Menu'
import { Wrapper } from './styled'

interface IProps {
  isMakeOrderOpen: boolean
  setIsMakeOrderOpen: Dispatch<boolean>
}

const MakeOrderModal: FC<IProps> = ({
  isMakeOrderOpen,
  setIsMakeOrderOpen,
}) => {
  return (
    <Menu isOpen={isMakeOrderOpen} setIsOpen={setIsMakeOrderOpen}>
      <Wrapper></Wrapper>
    </Menu>
  )
}

export default MakeOrderModal
