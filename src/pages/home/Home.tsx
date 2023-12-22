import React, { FC, useLayoutEffect } from 'react'
import Card from '@ui/card/Card'
import { RootTitle } from '@root/RootTitle'
import RecommendCard from '@ui/recommendCard/RecommendCard'
import { useAppSelector } from '@/hooks/reduxHooks'
import {
  CardsItems,
  Catalog,
  HeroSection,
  HeroSectionContainer,
  HeroSectionInfo,
  HeroSectionLink,
  HeroSectionLogo,
  RecommendCardsContainer,
  Subtitle,
  Title,
} from './styled'
import { RootContainer } from '@root/RootContainer'

const Home: FC = () => {
  const products = useAppSelector(state => state.product.products)
  const recommended = useAppSelector(state => state.recommended.products)
  const headerHeight = useAppSelector(state => state.header.height)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const catalog = document.getElementById('catalog')
    e.preventDefault()
    catalog &&
      catalog.scrollIntoView({
        behavior: 'smooth',
      })
  }

  useLayoutEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <HeroSection headerHeight={headerHeight}>
        <HeroSectionContainer>
          <HeroSectionInfo>
            <Title>
              Первый <span>мерч-шоп</span> айтишной тематики
            </Title>

            <Subtitle>
              Добро пожаловать в уникальный интернет-магазин, где каждая покупка
              становится проявлением безграничного интереса к IT! Наш магазин
              представляет собой настоящий рай для ценителей качественного
              мерчендайза, которые хотят приобрести не только стильную вещь, но
              и поддержать идею IT-шной культуры.
            </Subtitle>
            <HeroSectionLink href="/" onClick={scrollToSection}>
              В каталог
            </HeroSectionLink>
          </HeroSectionInfo>

          <HeroSectionLogo>
            <img
              src="https://kolchanov.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F62763b15-906b-40b3-862b-867be8f6bb28%2Fa0d67fbe-39f2-4d52-93bd-855bcf9472e2%2Fkisspng-electronic-engineering-computer-icons-electronics-chip-5abc2587f3b127.7166338615222798159982.svg?table=block&id=bf1d41a1-8a5d-4a1f-b28d-e6d9da4fc125&spaceId=62763b15-906b-40b3-862b-867be8f6bb28&userId=&cache=v2"
              alt="intro img"
            />
          </HeroSectionLogo>
        </HeroSectionContainer>
      </HeroSection>

      <Catalog>
        <section>
          <RootTitle>Рекомендованные товары</RootTitle>

          <RecommendCardsContainer>
            {recommended.map(product => (
              <RecommendCard key={product.id} product={product} />
            ))}
          </RecommendCardsContainer>
        </section>

        <section>
          <RootContainer>
            <RootTitle id="catalog">Футболки и свитшоты</RootTitle>

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
