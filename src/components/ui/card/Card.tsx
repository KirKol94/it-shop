import React, { FC, useState } from 'react'
import CardModal from '@/components/modals/cardModal/CardModal'
import { IProduct } from '@/types/IProduct'
import {
  Wrapper,
  Img,
  ImgBox,
  Price,
  OldPrice,
  Subtitle,
  Title,
  Body,
  Footer,
  FooterPrices,
  Button,
} from './styled'

interface IProps {
  product: IProduct
}

const Card: FC<IProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Wrapper>
        <ImgBox onClick={() => setIsOpen(true)}>
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
          <Button variant="main" onClick={() => setIsOpen(true)}>
            Подробнее
          </Button>
        </Footer>
      </Wrapper>

      {isOpen && (
        <CardModal
          isOpenCard={isOpen}
          setIsOpenCard={setIsOpen}
          product={product}
        />
      )}
    </>
  )
}

export default Card
