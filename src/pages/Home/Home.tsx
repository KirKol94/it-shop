import React, { FC } from 'react'
import Card from '@ui/card/Card'
import { RootContainer, RootTitle } from '@/styled/root'
import RecommendCard from '@/components/ui/recommendCard/RecommendCard'
import { useAppSelector } from '@/hooks/reduxHooks'
import {
  CardsItems,
  Catalog,
  HeroSection,
  HeroSectionButton,
  HeroSectionContainer,
  HeroSectionInfo,
  HeroSectionLogo,
  RecommendCardsContainer,
  Subtitle,
  Title,
} from './styled'
import { ReactComponent as WolfIcon } from '@/assets/svg/wolf.svg'

const Home: FC = () => {
  const products = useAppSelector(state => state.product.products)
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
        <section>
          <RootTitle>Рекомендованные товары</RootTitle>

          <RecommendCardsContainer>
            <RecommendCard />
            <RecommendCard />
            <RecommendCard />
            <RecommendCard />
          </RecommendCardsContainer>
        </section>

        <section>
          <RootContainer>
            <RootTitle>Футболки и свитшоты</RootTitle>

            <CardsItems>
              {products.map(product => (
                <Card key={product.id} product={product} />
              ))}
            </CardsItems>
          </RootContainer>
        </section>
      </Catalog>
    </>
  )
}

export default Home
