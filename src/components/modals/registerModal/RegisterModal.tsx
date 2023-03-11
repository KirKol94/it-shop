import React, { FC } from 'react'
import Modal from '../../ui/modal/Modal'
import Button from '../../ui/button/Button'
import { Link } from 'react-router-dom'
import {
  Footer,
  Form,
  Input,
  Privacy,
  PrivacyLink,
  RegModalWrapper,
  StyledLogo,
  Title,
} from './styled'

interface IProps {
  isOpen: boolean
  setIsOpen: () => void
}

const RegisterModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <RegModalWrapper>
        <StyledLogo />
        <Title>Регистрация аккаунта</Title>
        <Form>
          <Input placeholder="Имя" />
          <Input placeholder="Эл почта" />
          <Input placeholder="Введите пароль" />
          <Input placeholder="Введите пароль ещё раз" />
          <Button variant="main">Зарегистрироваться</Button>
        </Form>
        <Privacy>
          При нажатии на кнопку зарегистрироваться вы даёте своё согласие на
          обработку персональных данных. Для получения подробной информации
          ознакомьтесь c{' '}
          <PrivacyLink to="privacy">политикой конфиденциальности</PrivacyLink>
        </Privacy>
        <Footer>
          <Link to="">Уже есть аккаунт</Link>
          <Link to="">Забыли пароль</Link>
        </Footer>
      </RegModalWrapper>
    </Modal>
  )
}

export default RegisterModal
