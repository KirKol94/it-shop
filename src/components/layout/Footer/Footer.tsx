import React, { FC } from "react";
import {
  Address,
  AddressText,
  Block,
  Button,
  Container,
  FooterList,
  FooterLogo,
  FooterWrapper,
  Form,
  GenderBox,
  GenderInput,
  GenderLabel,
  InputBox,
  InputText,
  Label,
  NewsLetter,
  NewsLetterTitle,
  Privacy,
  Socials,
  SocialsIcon,
  SubtitleNav,
  SubtitleSocials,
} from "./styled";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  const menuLinks = [
    { name: "Главная", url: "" },
    { name: "Новинки", url: "new-products" },
    { name: "Футболки", url: "t-shirts" },
    { name: "Кепки", url: "caps" },
    { name: "Аксессуары", url: "accessories" },
    { name: "Чехлы", url: "covers" },
  ];

  const socialLinks = [
    { name: "vk", url: "https://vk.com/1" },
    { name: "vk", url: "https://vk.com/2" },
    { name: "vk", url: "https://vk.com/3" },
    { name: "vk", url: "https://vk.com/4" },
  ];

  return (
    <FooterWrapper>
      <Container>
        <Block>
          <FooterLogo />

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

        <nav>
          <SubtitleNav>Меню</SubtitleNav>
          <FooterList>
            {menuLinks.map(({ name, url }) => (
              <li key={url}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </FooterList>
        </nav>
        <Block>
          <SubtitleSocials>Познакомиться с нами</SubtitleSocials>
          <Socials>
            {socialLinks.map(({ name, url }) => (
              <li key={url}>
                <a href={url} title={name} target="_blank" rel="noreferrer">
                  <SocialsIcon />
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
                <InputText
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
                <InputText
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
              <GenderBox>
                <div>
                  <div>
                    <GenderInput
                      defaultChecked={true}
                      id="gender-choice__input_w"
                      name="Gender"
                      type="radio"
                      defaultValue="W"
                    />
                    <GenderLabel htmlFor="gender-choice__input_w">
                      <span>
                        <span />
                      </span>
                      Женщина
                    </GenderLabel>
                  </div>
                </div>
                <div>
                  <div>
                    <GenderInput
                      id="gender-choice__input_m"
                      name="Gender"
                      type="radio"
                      defaultValue="M"
                    />
                    <GenderLabel htmlFor="gender-choice__input_m">
                      <span>
                        <span />
                      </span>
                      Мужчина
                    </GenderLabel>
                  </div>
                </div>
              </GenderBox>
              <div>
                <Button variant="main" type="submit" onClick={() => {}}>
                  Подписаться
                </Button>
                <Privacy>
                  При нажатии на кнопку подписаться вы даёте своё согласие на
                  получение новостной рассылки по электронной почте. Для
                  получения подробной информации ознакомьтесь с
                  <Link to="policy">политикой конфиденциальности</Link>.
                </Privacy>
              </div>
            </Form>
          </NewsLetter>
        </Block>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
