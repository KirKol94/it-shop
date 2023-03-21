import React, { FC, ReactNode } from 'react'
import { Dialog } from '@headlessui/react'
import { MenuContent } from './styled'
import { RootModalOverlay } from '@root/RootModalOverlay'

interface IProps {
  children: ReactNode
}

const Menu: FC<IProps> = ({ children }) => {
  const isOpen = false
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const setIsOpen = () => {}

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
