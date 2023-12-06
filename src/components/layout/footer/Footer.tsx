import {
  Address,
  AddressText,
  Block,
  Button,
  Container,
  FooterLogoBox,
  FooterWrapper,
  Form,
  InputTextFooter,
  NewsLetter,
  NewsLetterTitle,
  Privacy,
  Socials,
  SocialsIcon,
  Subtitle,
} from './styled'
import { InputBox, Label } from '@root/RootInput'
import React, { FC } from 'react'

import { Link } from 'react-router-dom'
import Logo from '@ui/logo/Logo'

const Footer: FC = () => {
  const socialLinks = [
    { name: 'vk', url: 'https://vk.com/1' },
    { name: 'boosty', url: 'https://boosty.to/m0rtymerr' },
    { name: 'instagram', url: 'https://www.instagram.com/m0rtymerr/' },
    { name: 'twitter', url: 'https://twitter.com/M0rtyMerr' },
  ]

  return (
    <FooterWrapper>
      <Container>
        <Block>
          <FooterLogoBox>
            <Logo />
          </FooterLogoBox>

          <Address>
            <AddressText>ул. Пушкина, д. Колотушкина</AddressText>
            <AddressText>
              <a href="mailto:info@wolfpack.com">info@wolfpack.com</a>
            </AddressText>
            <AddressText>
              <a href="tel:+79999999999">+7 (999) 999-99-99</a>
            </AddressText>
          </Address>
        </Block>

        <Block>
          <Subtitle mod="social">Познакомиться с нами</Subtitle>
          <Socials>
            {socialLinks.map(({ name, url }) => (
              <li key={url}>
                <a href={url} title={name} target="_blank" rel="noreferrer">
                  <SocialsIcon icon={name} />
                </a>
              </li>
            ))}
          </Socials>
        </Block>
        <Block>
          <NewsLetter>
            <NewsLetterTitle>Подписаться на рассылку</NewsLetterTitle>
            <Form id="fastMail" name="fastMail">
              <InputBox>
                <InputTextFooter
                  mask=""
                  autoComplete="off"
                  id="fastMailPhone"
                  type="text"
                  required
                  maxLength={20}
                  placeholder=" "
                />
                <Label htmlFor="fastMailPhone">Имя</Label>
                <span hidden>УКАЖИТЕ ВАШЕ ИМЯ</span>
              </InputBox>
              <InputBox>
                <InputTextFooter
                  mask=""
                  autoComplete="off"
                  id="fastMailEmail"
                  type="email"
                  required
                  maxLength={40}
                  placeholder=" "
                />
                <Label htmlFor="fastMailEmail">Эл. почта</Label>
                <span hidden>
                  УКАЖИТЕ ПРАВИЛЬНЫЙ АДРЕС ВАШЕЙ ЭЛЕКТРОННОЙ ПОЧТЫ
                </span>
              </InputBox>
              <div>
                <Button
                  variant="outlined"
                  type="submit"
                  onClick={() => console.log('форма отправлена')}>
                  Подписаться
                </Button>
                <Privacy>
                  При нажатии на кнопку подписаться вы даёте своё согласие на
                  получение новостной рассылки по электронной почте. Для
                  получения подробной информации ознакомьтесь с
                  <Link to="privacy-policy"> политикой конфиденциальности</Link>
                  .
                </Privacy>
              </div>
            </Form>
          </NewsLetter>
        </Block>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
