import React, { FC, useState } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)
  const showProduct = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Wrapper>
        <ImgBox onClick={showProduct}>
          <Img src={product.image} alt={product.name} />
        </ImgBox>

        <Body>
          <Subtitle>{product.category?.name}</Subtitle>
          <Title>{product.name}</Title>
        </Body>

        <Footer>
          <FooterPrices>
            <Price>{product.price.toLocaleString('ru')} ₽</Price>
            <OldPrice>{product.oldPrice.toLocaleString('ru')} ₽</OldPrice>
          </FooterPrices>
          <CardButton variant="outlined" onClick={showProduct}>
            Подробнее
          </CardButton>
        </Footer>
      </Wrapper>

      <CardModal product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Card
