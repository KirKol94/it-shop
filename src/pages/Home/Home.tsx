import React, { FC } from 'react'
import Card from '@ui/card/Card'
import { useAppSelector } from '@/hooks/reduxHooks'
import {
  Cards,
  CardsContainer,
  CardsItems,
  CardsTitle,
  HeroSection,
  HeroSectionButton,
  HeroSectionContainer,
  HeroSectionInfo,
  HeroSectionLogo,
  Subtitle,
  Title,
} from './styled'
import { ReactComponent as WolfIcon } from '@/assets/svg/wolf.svg'

const Home: FC = () => {
  const searchProductValue = useAppSelector(
    state => state.product.searchProductValue
  )
  const products = useAppSelector(state => state.product.products).filter(p =>
    p.name.toLowerCase().includes(searchProductValue.toLowerCase())
  )
  const headerHeight = useAppSelector(state => state.header.height)

  return (
    <>
      <HeroSection headerHeight={headerHeight}>
        <HeroSectionContainer>
          <HeroSectionInfo>
            <Title>
              Первый <span>мерч-шоп</span> осознанной меркантильности
            </Title>

            <Subtitle>
              Первый мерч-шоп осознанной меркантильности (h1) Создано
              отчаявшимися найти валютную удалёнку джунами для таких же джунов В
              каталог мерча Нанять талантливых джунов
            </Subtitle>
            <HeroSectionButton variant="solid">
              В каталог мерча
            </HeroSectionButton>
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
