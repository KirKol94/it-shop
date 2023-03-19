import React, { FC } from 'react'
import {
  Body,
  Footer,
  Header,
  Img,
  ImgBox,
  Inner,
  OldPrice,
  Price,
  ProductName,
  Title,
  Wrapper,
} from './styled'

const RecommendCard: FC = () => {
  return (
    <Wrapper>
      <ImgBox>
        <Img
          src="https://cdn.discordapp.com/attachments/1080428490379247716/1086235329457033246/image.png"
          alt=""
        />
      </ImgBox>
      <Inner>
        <Header>
          <ProductName>Кепка</ProductName>
        </Header>
        <Body>
          <Title>IT-пузырь</Title>
        </Body>
        <Footer>
          <Price>800 ₽</Price>
          <OldPrice>1500 ₽</OldPrice>
        </Footer>
      </Inner>
    </Wrapper>
  )
}

export default RecommendCard
