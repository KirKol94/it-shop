import React, { FC } from 'react'
import Button from '@ui/button/Button'
import Card from '@ui/card/Card'
import { useAppSelector } from '@/hooks/reduxHooks'
import {
  Buttons,
  Cards,
  CardsContainer,
  CardsItems,
  CardsTitle,
  HeroSection,
  HeroSectionContainer,
  Subtitle,
  Title,
} from './styled'

const Home: FC = () => {
  const searchProductValue = useAppSelector(
    state => state.product.searchProductValue
  )
  const products = useAppSelector(state => state.product.products).filter(p =>
    p.name.toLowerCase().includes(searchProductValue.toLowerCase())
  )

  return (
    <>
      <HeroSection>
        <HeroSectionContainer>
          <Title>Первый мерч-шоп осознанной меркантильности</Title>

          <Subtitle>
            Первый мерч-шоп осознанной меркантильности (h1) Создано отчаявшимися
            найти валютную удалёнку джунами для таких же джунов В каталог мерча
            Нанять талантливых джунов
          </Subtitle>

          <Buttons>
            <Button variant="main">В каталог мерча</Button>
            <Button variant="second">Нанять талантливых джунов</Button>
          </Buttons>
        </HeroSectionContainer>
      </HeroSection>

      <Cards>
        <CardsContainer>
          <CardsTitle>Футболки и свитшоты</CardsTitle>

          <CardsItems>
            {products.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </CardsItems>
        </CardsContainer>
      </Cards>
    </>
  )
}

export default Home
