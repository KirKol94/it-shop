import React, { FC } from 'react'
import Menu from '@ui/menu/Menu'
import {
  Button,
  CloseBox,
  Form,
  FormTitle,
  Header,
  InputRow,
  Title,
  Wrapper,
  OrderInputBox,
  OrderInput,
  OrderInputLabel,
} from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { setIsOpenMakeOrder } from '@/store/dialogWindows/dialogWindowsSlice'
import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg'

const MakeOrderModal: FC = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.dialogs.isOpenMakeOrder)
  const setIsOpen = (isOpen: boolean) => dispatch(setIsOpenMakeOrder(isOpen))

  if (!isOpen) return null

  return (
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper>
        <Header>
          <Title>Оформление заказа</Title>
          <CloseBox>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </CloseBox>
        </Header>

        <Form>
          <FormTitle>Информация о покупателе</FormTitle>
          <InputRow>
            <OrderInputBox>
              <OrderInput
                id="orderName"
                type="text"
                required
                maxLength={20}
                placeholder=" "
              />
              <OrderInputLabel htmlFor="orderName">Имя</OrderInputLabel>
            </OrderInputBox>
            <OrderInputBox>
              <OrderInput
                id="orderLastName"
                type="text"
                required
                maxLength={20}
                placeholder=" "
              />
              <OrderInputLabel htmlFor="orderLastName">Фамилия</OrderInputLabel>
            </OrderInputBox>
          </InputRow>
          <InputRow>
            <OrderInputBox>
              <OrderInput
                id="orderPhone"
                type="text"
                required
                maxLength={20}
                placeholder=" "
              />
              <OrderInputLabel htmlFor="orderPhone">Телефон</OrderInputLabel>
            </OrderInputBox>
            <OrderInputBox>
              <OrderInput
                id="orderMail"
                type="email"
                required
                placeholder=" "
              />
              <OrderInputLabel htmlFor="orderMail">Эл. почта</OrderInputLabel>
            </OrderInputBox>
          </InputRow>

          <FormTitle>Адрес доставки</FormTitle>
          <InputRow>
            <OrderInputBox>
              <OrderInput
                id="orderCountry"
                type="text"
                required
                placeholder=" "
              />
              <OrderInputLabel htmlFor="orderCountry">Страна</OrderInputLabel>
            </OrderInputBox>
            <OrderInputBox>
              <OrderInput id="orderCity" type="text" required placeholder=" " />
              <OrderInputLabel htmlFor="orderCity">Город</OrderInputLabel>
            </OrderInputBox>
          </InputRow>
          <OrderInputBox>
            <OrderInput id="orderCity" type="text" required placeholder=" " />
            <OrderInputLabel htmlFor="orderCity">
              Адрес строка 1
            </OrderInputLabel>
          </OrderInputBox>
          <OrderInputBox>
            <OrderInput id="orderCity" type="text" placeholder=" " />
            <OrderInputLabel htmlFor="orderCity">
              Адрес строка 2
            </OrderInputLabel>
          </OrderInputBox>

          <FormTitle>Информация об оплате</FormTitle>

          <Button onClick={() => setIsOpen(false)} variant="solid">
            Перейти к оплате
          </Button>
        </Form>
      </Wrapper>
    </Menu>
  )
}

export default MakeOrderModal
