import React, { Dispatch, FC, ReactNode } from 'react'

import { Dialog } from '@headlessui/react'
import { RootModalOverlay } from '@/styled/root/RootModalOverlay'

interface IProps {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
  children: ReactNode
}

const BottomBanner: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen}>
      <RootModalOverlay>
        <Dialog.Panel>{children}</Dialog.Panel>
      </RootModalOverlay>
    </Dialog>
  )
}

export default BottomBanner
