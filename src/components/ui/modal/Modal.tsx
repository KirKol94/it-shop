import React, { Dispatch, FC, ReactNode } from 'react'
import { Dialog } from '@headlessui/react'
import { StyledModal } from './styled'
import { RootModalOverlay } from '@root/RootModalOverlay'

interface IProps {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
  children: ReactNode
}

const Modal: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen}>
      <RootModalOverlay>
        <Dialog.Panel>
          <StyledModal>{children}</StyledModal>
        </Dialog.Panel>
      </RootModalOverlay>
    </Dialog>
  )
}

export default Modal
