import React, { FC } from 'react'
import Menu from '@ui/menu/Menu'
import { Wrapper } from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { setIsOpenMakeOrder } from '@/store/dialogWindows/dialogWindowsSlice'

const MakeOrderModal: FC = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.dialogs.isOpenMakeOrder)
  const setIsOpen = (isOpen: boolean) => dispatch(setIsOpenMakeOrder(isOpen))

  if (!isOpen) return null

  return (
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper></Wrapper>
    </Menu>
  )
}

export default MakeOrderModal
