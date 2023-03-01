import React, { FC, ReactNode } from 'react'
import styles from './Title.module.scss'

interface IProps {
  children: ReactNode
}

const Title: FC<IProps> = ({ children }) => {
  return (
    <h1 className={styles.title}>{children}</h1>
  )
}

export default Title
