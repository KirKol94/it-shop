import {
  Button,
  CloseBox,
  Form,
  FormTitle,
  Header,
  InputRow,
  OrderInput,
  Title,
  Wrapper,
} from './styled'
import { InputBox, Label } from '@root/RootInput'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg'
import Menu from '@ui/menu/Menu'
import { setIsOpenMakeOrder } from '@/store/dialogWindows/dialogWindowsSlice'

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
            <InputBox>
              <OrderInput
                mask=""
                id="orderName"
                type="text"
                required
                maxLength={20}
                placeholder=" "
              />
              <Label htmlFor="orderName">Имя</Label>
            </InputBox>
            <InputBox>
              <OrderInput
                mask=""
                id="orderLastName"
                type="text"
                required
                maxLength={20}
                placeholder=" "
              />
              <Label htmlFor="orderLastName">Фамилия</Label>
            </InputBox>
          </InputRow>
          <InputRow>
            <InputBox>
              <OrderInput
                id="orderPhone"
                required
                placeholder=" "
                mask="+7(999)999-99-99"
              />
              <Label htmlFor="orderPhone">Телефон</Label>
            </InputBox>
            <InputBox>
              <OrderInput
                mask=""
                id="orderMail"
                type="email"
                required
                placeholder=" "
              />
              <Label htmlFor="orderMail">Эл. почта</Label>
            </InputBox>
          </InputRow>

          <FormTitle>Адрес доставки</FormTitle>
          <InputRow>
            <InputBox>
              <OrderInput
                mask=""
                id="orderCountry"
                type="text"
                required
                placeholder=" "
              />
              <Label htmlFor="orderCountry">Страна</Label>
            </InputBox>
            <InputBox>
              <OrderInput
                mask=""
                id="orderCity"
                type="text"
                required
                placeholder=" "
              />
              <Label htmlFor="orderCity">Город</Label>
            </InputBox>
          </InputRow>
          <InputBox>
            <OrderInput
              mask=""
              id="orderCity"
              type="text"
              required
              placeholder=" "
            />
            <Label htmlFor="orderCity">Адрес строка 1</Label>
          </InputBox>
          <InputBox>
            <OrderInput mask="" id="orderCity" type="text" placeholder=" " />
            <Label htmlFor="orderCity">Адрес строка 2</Label>
          </InputBox>

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
