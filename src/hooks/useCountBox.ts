import { IProduct } from '@/types/IProduct'
import React, { useState } from 'react'

export const useCountBox = (product: IProduct) => {
  const [count, setCount] = useState(1)
  const price = product.price * +count

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    if (count > 1) setCount(prev => prev - 1)
  }

  // разрешаем вводить только цифры
  const handleCountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*$/
    const value = e.target.value
    if (regex.test(value) && +value !== 0) {
      setCount(+value)
    }
  }

  return {
    count,
    setCount,
    price,
    increment,
    decrement,
    handleCountInputChange,
  }
}
