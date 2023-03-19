import React, { FC } from 'react'
import {
  Footer,
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
        <img
          src="https://cdn.discordapp.com/attachments/1080428490379247716/1086235329457033246/image.png"
          alt=""
        />
      </ImgBox>
      <Inner>
        <div>
          <ProductName>Кепка</ProductName>
        </div>
        <div>
          <Title>IT-пузырь</Title>
        </div>
        <Footer>
          <Price>800 ₽</Price>
          <OldPrice>1500 ₽</OldPrice>
        </Footer>
      </Inner>
    </Wrapper>
  )
}

export default RecommendCard
