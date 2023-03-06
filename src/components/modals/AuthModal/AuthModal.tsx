import React, { useState } from 'react'
import Modal from '../../ui/Modal/Modal'
import styles from './Auth.module.scss'
import { useNavigate } from 'react-router-dom'

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  const onClose = () => {
    setIsOpen(false)
    navigate('/')
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={onClose}>
      <h2 className={styles.title}>
        Auth Modal
      </h2>
    </Modal>
  )
}

export default AuthModal
