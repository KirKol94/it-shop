import React, { ChangeEvent, FC, useState } from 'react'
import Menu from '@ui/menu/Menu'
import {
  CartBody,
  CartFooter,
  CartFooterAction,
  CartFooterInfo,
  CartFooterTitle,
  CartInfoRow,
  CartTop,
  Close,
  InfoFinal,
  PromoInput,
  PromoLabel,
  PromoSaleSize,
  Title,
  Wrapper,
} from './styled'
import CartItem from '@ui/cartItem/CartItem'
import CloseIcon from '@ui/icons/CloseIcon'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { changeDiscountSize } from '@/store/cart/cartSlice'

interface IProps {
  isOpen: boolean
  setIsOpen: (bool: boolean) => void
}

const CartModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch()

  const cartItems = useAppSelector(state => state.cart.items)
  const discountSize = useAppSelector(state => state.cart.discountSize)

  const [promoCode, setPromoCode] = useState('')
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const conditionForDiscount =
      value.toLowerCase() === 'nazarov1000' ||
      value.toLowerCase() === 'назаров1000'
    setPromoCode(value)
    if (conditionForDiscount) {
      dispatch(changeDiscountSize(1000))
    } else {
      dispatch(changeDiscountSize(0))
    }
  }

  const price = cartItems.reduce((acc, cur) => (acc += cur.totalPrice), 0)
  const totalPriceWithDiscount = price - discountSize
  const productCount = cartItems.reduce((acc, cur) => (acc += cur.count), 0)

  return (
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper>
        <CartTop>
          <Title>Корзина</Title>
          <Close>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon size={32} />
            </button>
          </Close>
        </CartTop>

        <CartBody>
          <CartItem />
          <CartItem />
          <CartItem />
        </CartBody>

        <CartFooter>
          <CartFooterInfo>
            <CartFooterTitle>Ваша корзина</CartFooterTitle>
            <CartInfoRow>
              <span>Товары({productCount})</span>
              <span>{price.toLocaleString('ru')}₽</span>
            </CartInfoRow>
            <CartInfoRow>
              <span>Доставка</span>
              <span>Считается отдельно</span>
            </CartInfoRow>
            <CartInfoRow>
              <div>
                <div>Скидка</div>
                <div>
                  <PromoLabel>
                    Добавить купон →
                    <PromoInput
                      type="text"
                      value={promoCode}
                      onChange={onChangeInputHandler}
                    />
                  </PromoLabel>
                </div>
              </div>
              <PromoSaleSize>-{discountSize}₽</PromoSaleSize>
            </CartInfoRow>
            <InfoFinal>
              <span>Сумма заказа</span>
              <span>{totalPriceWithDiscount.toLocaleString('ru')}₽</span>
            </InfoFinal>
          </CartFooterInfo>
          <CartFooterAction variant="main">Оформить заказ</CartFooterAction>
        </CartFooter>
      </Wrapper>
    </Menu>
  )
}

export default CartModal
