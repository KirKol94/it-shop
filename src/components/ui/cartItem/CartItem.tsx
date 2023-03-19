import React, { FC } from 'react'
import CloseIcon from '@ui/icons/CloseIcon'
import {
  CountBtn,
  CountInput,
  Delete,
  Footer,
  Header,
  Img,
  ImgBox,
  Inner,
  Line,
  Multiply,
  Price,
  SizeName,
  Sizes,
  Title,
  Wrapper,
} from './styled'
import { ICartProduct } from '@/types/ICartProduct'
import { useCountBox } from '@/hooks/useCountBox'
import { useAppDispatch } from '@/hooks/reduxHooks'
import {
  decrementCartItemCount,
  deleteProduct,
  incrementCartItemCount,
} from '@/store/cart/cartSlice'
import { RootCountBox } from '@/styled/root'

interface IProps {
  product: ICartProduct
}

const CartItem: FC<IProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const { increment, decrement, handleCountInputChange } = useCountBox(product)

  const onDeleteItem = () => dispatch(deleteProduct(product.id))
  const onDecrement = () => {
    decrement()
    dispatch(decrementCartItemCount(product.id))
  }
  const onIncrement = () => {
    increment()
    dispatch(incrementCartItemCount(product.id))
  }

  return (
    <Wrapper>
      <ImgBox>
        <Img src={product.img} />
      </ImgBox>
      <Inner>
        <Header>
          <Title>{product.name}</Title>
          <Delete>
            <button onClick={onDeleteItem}>
              <CloseIcon size={22} />
            </button>
          </Delete>
        </Header>

        <Sizes>
          <p>Размер:</p>
          <SizeName>{product.size}</SizeName>
        </Sizes>

        <Footer>
          <RootCountBox>
            <CountBtn action="minus" onClick={onDecrement}>
              -
            </CountBtn>
            <CountInput
              type="text"
              inputMode="numeric"
              value={product.count}
              onChange={handleCountInputChange}
              maxLength={3}
            />
            <CountBtn action="plus" onClick={onIncrement}>
              +
            </CountBtn>
          </RootCountBox>
          <Multiply>x</Multiply>
          <Price>{product.price.toLocaleString('ru')} ₽</Price>
          <Line></Line>
          <Price>{product.price * product.count} ₽</Price>
        </Footer>
      </Inner>
    </Wrapper>
  )
}

export default CartItem
