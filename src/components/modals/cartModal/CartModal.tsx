import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import Menu from '@ui/menu/Menu'
import {
  CartBody,
  CartFooter,
  CartFooterAction,
  CartFooterInfo,
  CartInfoRow,
  CartTop,
  Close,
  EmptyCart,
  EmptyTitle,
  InfoFinal,
  PromoInput,
  PromoLabel,
  PromoSaleSize,
  Title,
  WolfIcon,
  Wrapper,
} from './styled'
import CartItem from '@ui/cartItem/CartItem'
import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { changeDiscountSize } from '@/store/cart/cartSlice'
import {
  setIsOpenCart,
  setIsOpenMakeOrder,
} from '@/store/dialogWindows/dialogWindowsSlice'

const CartModal: FC = () => {
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(state => state.dialogs.isOpenCart)
  const setIsOpen = (isOpen: boolean) => dispatch(setIsOpenCart(isOpen))

  const onMakeOrderClick = () => {
    setIsOpen(false)
    dispatch(setIsOpenMakeOrder(true))
  }

  const cartItems = useAppSelector(state => state.cart.items)
  const discountSize = useAppSelector(state => state.cart.discountSize)
  const [promoCode, setPromoCode] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)

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

  const totalPriceWithDiscount = totalPrice - discountSize
  const productCount = cartItems.reduce((acc, cur) => acc + cur.count, 0)

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((acc, cur) => acc + cur.price * cur.count, 0)
    )
  }, [cartItems])

  if (!isOpen) return null

  return (
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper>
        <CartTop>
          <Title>Корзина</Title>
          <Close>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </Close>
        </CartTop>
        <CartBody>
          {cartItems.map(product => (
            <CartItem product={product} key={product.id} />
          ))}
        </CartBody>

        {cartItems.length === 0 && (
          <EmptyCart>
            <EmptyTitle>Корзина пуста</EmptyTitle>
            <WolfIcon />
          </EmptyCart>
        )}

        {cartItems.length && (
          <CartFooter>
            <CartFooterInfo>
              <CartInfoRow>
                <span>Товары({productCount})</span>
                <span>{totalPrice.toLocaleString()}₽</span>
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
            <CartFooterAction variant="solid" onClick={onMakeOrderClick}>
              Оформить заказ
            </CartFooterAction>
          </CartFooter>
        )}
      </Wrapper>
    </Menu>
  )
}

export default CartModal
