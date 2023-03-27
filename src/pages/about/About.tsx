import React, { FC, useLayoutEffect } from 'react'
import { RootContainer } from '@root/RootContainer'
import styled from 'styled-components'
import { useAppSelector } from '@/hooks/reduxHooks'

const Wrapper = styled(RootContainer)<{ headerHeight: number }>`
  padding-top: calc(${({ headerHeight }) => headerHeight}px + 40px);
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const About: FC = () => {
  const headerHeight = useAppSelector(state => state.header.height)

  useLayoutEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <Wrapper headerHeight={headerHeight}>
      <h1>
        Добро пожаловать на страницу нашего интернет-магазина,
        специализирующегося на продаже мерч-одежды с айтишной тематикой!
      </h1>
      <p>
        Мы являемся командой энтузиастов, которые любят и ценят культуру и стиль
        IT-индустрии. Мы верим, что одежда не только помогает выразить свою
        индивидуальность, но и может отражать нашу страсть и интересы.
      </p>
      <p>
        Мы собираем коллекцию мерч-одежды с самыми популярными темами из мира
        технологий: программирование, игры, криптовалюты, электроника и многое
        другое. Наша цель - создать качественные и уникальные товары, которые
        будут привлекательными для всех, кто увлечен IT-индустрией.
      </p>
      <p>
        Мы уверены, что одежда является частью нашей личности, и поэтому мы
        используем только качественные материалы и технологии производства,
        чтобы наши клиенты могли получить настоящую удовлетворенность от нашей
        продукции.
      </p>
      <p>
        Мы стремимся предоставить нашим клиентам максимально удобный и быстрый
        сервис, начиная от выбора товара на нашем сайте и заканчивая доставкой
        до дверей. Мы также готовы помочь нашим клиентам с любыми вопросами или
        запросами, которые они могут иметь.
      </p>
      <p>
        Мы ценим наших клиентов и убеждены, что каждый из них заслуживает нашего
        внимания и лучшего обслуживания. Мы стремимся сделать процесс покупки
        нашей мерч-одежды настолько легким и приятным, насколько это возможно.
      </p>
      <p>
        Мы благодарим вас за посещение нашего сайта и надеемся, что вы найдете
        здесь что-то, что будет интересно для вас. Если у вас есть какие-либо
        вопросы или предложения, пожалуйста, свяжитесь с нами. Мы всегда рады
        слышать от наших клиентов!
      </p>
    </Wrapper>
  )
}

export default About
