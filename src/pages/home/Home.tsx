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
              src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F62763b15-906b-40b3-862b-867be8f6bb28%2Fe755fe66-f309-4b59-a86a-f78a247176a5%2Fkisspng-electronic-engineering-computer-icons-electronics-chip-5abc2587f3b127.7166338615222798159982.webp?table=block&id=54185432-a02c-41ed-89bb-f23ec09d38b2&spaceId=62763b15-906b-40b3-862b-867be8f6bb28&width=2000&userId=2741abc2-75dd-4832-9063-4f0b928741d6&cache=v2"
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
