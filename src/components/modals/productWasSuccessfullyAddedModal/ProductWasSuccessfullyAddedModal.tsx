import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

import Menu from '@/components/ui/menu/Menu'
import { Wrapper } from './styled'
import { setIsOpenSuccessfullyAdded } from '@/store/dialogWindows/dialogWindowsSlice'

export const ProductWasSuccessfullyAddedModal: FC = () => {
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(state => state.dialogs.isOpenSuccessfullyAdded)
  const setIsOpen = () => dispatch(setIsOpenSuccessfullyAdded(false))

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsOpenSuccessfullyAdded(false))
    }, 2000)
  })

  return (
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper>product was successfully added to cart</Wrapper>
    </Menu>
  )
}
