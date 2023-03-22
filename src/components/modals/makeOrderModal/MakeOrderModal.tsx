import React, { FC } from 'react'
import Menu from '@ui/menu/Menu'
import {
  Button,
  CloseBox,
  Form,
  FormTitle,
  Header,
  Input,
  InputRow,
  Title,
  Wrapper,
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
            <Input placeholder="Имя" />
            <Input placeholder="Фамилия" />
          </InputRow>
          <InputRow>
            <Input placeholder="Телефон" />
            <Input placeholder="Эл. почта" />
          </InputRow>

          <FormTitle>Адрес доставки</FormTitle>
          <InputRow>
            <Input placeholder="Страна" />
            <Input placeholder="Город" />
          </InputRow>
          <Input placeholder="Адрес строка 1" />
          <Input placeholder="Адрес строка 2" />

          <FormTitle>Информация об оплате</FormTitle>
          <Input placeholder="Извините, но я пока в душе не ебу, что сюда лепить" />

          <Button onClick={() => setIsOpen(false)} variant="solid">
            Перейти к оплате
          </Button>
        </Form>
      </Wrapper>
    </Menu>
  )
}

export default MakeOrderModal
