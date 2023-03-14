import React, { FC } from 'react'
import Menu from '@ui/menu/Menu'
import {
  CartBody,
  CartFooter,
  CartFooterAction,
  CartFooterInfo,
  CartFooterTitle,
  CartInfoRow,
  CartTop,
  InfoFinal,
  PromoInput,
  PromoLabel,
  PromoSaleSize,
  Title,
  Wrapper,
} from './styled'

interface IProps {
  isOpen: boolean
  setIsOpen: (bool: boolean) => void
}

const CartModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  const price = 12345

  return (
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper>
        <CartTop>
          <Title>Корзина</Title>
        </CartTop>
        <CartBody></CartBody>
        <CartFooter>
          <CartFooterInfo>
            <CartFooterTitle>Ваша корзина</CartFooterTitle>
            <CartInfoRow>
              <span>Товары(4)</span>
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
                    <PromoInput type="text" />
                  </PromoLabel>
                </div>
              </div>
              <PromoSaleSize>-1 111 ₽</PromoSaleSize>
            </CartInfoRow>
            <InfoFinal>
              <span>Сумма заказа</span>
              <span>13 234₽</span>
            </InfoFinal>
          </CartFooterInfo>
          <CartFooterAction variant="main">Оформить заказ</CartFooterAction>
        </CartFooter>
      </Wrapper>
    </Menu>
  )
}

export default CartModal