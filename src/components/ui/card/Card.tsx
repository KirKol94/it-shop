import React, { FC } from 'react'
import CardModal from '@/components/modals/cardModal/CardModal'
import { IProduct } from '@/types/IProduct'
import {
  Body,
  CardButton,
  Footer,
  FooterPrices,
  Img,
  ImgBox,
  OldPrice,
  Price,
  Subtitle,
  Title,
  Wrapper,
} from './styled'

interface IProps {
  product: IProduct
}

const Card: FC<IProps> = ({ product }) => {
  return (
    <>
      <Wrapper>
        <ImgBox>
          <Img src={product.image} alt={product.name} />
        </ImgBox>

        <Body>
          <Subtitle>Футболка</Subtitle>
          <Title>{product.name}</Title>
        </Body>

        <Footer>
          <FooterPrices>
            <Price>{product.price.toLocaleString('ru')} ₽</Price>
            <OldPrice>{product.price.toLocaleString('ru')} ₽</OldPrice>
          </FooterPrices>
          <CardButton variant="outlined">Подробнее</CardButton>
        </Footer>
      </Wrapper>

      <CardModal product={product} />
    </>
  )
}

export default Card
