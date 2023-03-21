import React, { Dispatch, FC, ReactNode } from 'react'
import { Dialog } from '@headlessui/react'
import { MenuContent } from './styled'
import { RootModalOverlay } from '@root/RootModalOverlay'

interface IProps {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
  children: ReactNode
}

const Menu: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen}>
      <RootModalOverlay>
        <Dialog.Panel>
          <MenuContent>{children}</MenuContent>
        </Dialog.Panel>
      </RootModalOverlay>
    </Dialog>
  )
}

export default Menu
