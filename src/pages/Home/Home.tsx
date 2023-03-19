import React, { FC } from 'react'
import Card from '@ui/card/Card'
import { RootTitle } from '@/styled/root'
import RecommendCard from '@/components/ui/recommendCard/RecommendCard'
import { useAppSelector } from '@/hooks/reduxHooks'
import {
  ProductCards,
  CardsContainer,
  CardsItems,
  HeroSection,
  HeroSectionButton,
  HeroSectionContainer,
  HeroSectionInfo,
  HeroSectionLogo,
  Subtitle,
  Title,
  RecommendCards,
  RecommendCardsContainer,
  Catalog,
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

      <Catalog>
        <RecommendCards>
          <RootTitle>Рекомендованные товары</RootTitle>

          <RecommendCardsContainer>
            <RecommendCard />
            <RecommendCard />
            <RecommendCard />
            <RecommendCard />
          </RecommendCardsContainer>
        </RecommendCards>

        <ProductCards>
          <CardsContainer>
            <RootTitle>Футболки и свитшоты</RootTitle>

            <CardsItems>
              {products.map(product => (
                <Card key={product.id} product={product} />
              ))}
            </CardsItems>
          </CardsContainer>
        </ProductCards>
      </Catalog>
    </>
  )
}

export default Home
