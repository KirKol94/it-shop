import React, { FC } from 'react'
import { IProduct } from '@/types/IProduct'
import {
  Wrapper,
  Header,
  ProductName,
  ImgBox,
  Img,
  Inner,
  Body,
  Title,
  Footer,
  Price,
  OldPrice,
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
