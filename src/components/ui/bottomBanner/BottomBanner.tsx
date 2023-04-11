import React, { Dispatch, FC, ReactNode, useEffect } from 'react'

interface IProps {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
  children: ReactNode
}

const BottomBanner: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false)
    }, 10 * 1000)
  }, [])

  if (!isOpen) return null

  return <>{children}</>
}

export default BottomBanner
