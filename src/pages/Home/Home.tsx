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
  HeroSectionInfo,
  HeroSectionLogo,
  Subtitle,
  Title,
} from './styled'
import WolfIcon from '@ui/icons/WolfIcon'

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
          <HeroSectionInfo>
            <Title>Первый мерч-шоп осознанной меркантильности</Title>

            <Subtitle>
              Первый мерч-шоп осознанной меркантильности (h1) Создано
              отчаявшимися найти валютную удалёнку джунами для таких же джунов В
              каталог мерча Нанять талантливых джунов
            </Subtitle>
            <Buttons>
              <Button variant="solid">В каталог мерча</Button>
            </Buttons>
          </HeroSectionInfo>

          <HeroSectionLogo>
            <WolfIcon />
          </HeroSectionLogo>
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
