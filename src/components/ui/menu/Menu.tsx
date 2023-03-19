import React, { FC, ReactNode } from 'react'
import { Dialog } from '@headlessui/react'
import { MenuContent } from './styled'
import { RootModalOverlay } from '@root/RootModalOverlay'

interface IProps {
  isOpen: boolean
  setIsOpen: () => void
  children: ReactNode
}

const Menu: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  const onClose = () => setIsOpen()

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <RootModalOverlay>
        <Dialog.Panel>
          <MenuContent>{children}</MenuContent>
        </Dialog.Panel>
      </RootModalOverlay>
    </Dialog>
  )
}

export default Menu
