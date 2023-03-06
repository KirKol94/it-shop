import React, { useState } from 'react'
import Modal from '../../ui/Modal/Modal'
import styles from './Register.module.scss'
import { useNavigate } from 'react-router-dom'

const RegisterModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  const onClose = () => {
    setIsOpen(false)
    navigate('/')
  }


  return (
    <Modal isOpen={isOpen} setIsOpen={onClose}>
      <h2 className={styles.title}>
        Register Modal
      </h2>
    </Modal>
  )
}

export default RegisterModal
