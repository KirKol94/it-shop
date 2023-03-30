import React, { FC, useState } from 'react'
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
import { IProduct } from '@/types/IProduct'
import CardModal from '@/components/modals/cardModal/CardModal'

interface IProps {
  product: IProduct
}

const RecommendCard: FC<IProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onCardClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Wrapper onClick={onCardClick}>
        <ImgBox>
          <img src={product.image} alt={product.name} />
        </ImgBox>
        <Inner>
          <div>
            <ProductName>{product.category?.name}</ProductName>
          </div>
          <div>
            <Title>{product.name}</Title>
          </div>
          <Footer>
            <Price>{product.price.toLocaleString()} ₽</Price>
            <OldPrice>{product.oldPrice.toLocaleString()} ₽</OldPrice>
          </Footer>
        </Inner>
      </Wrapper>

      <CardModal product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default RecommendCard
