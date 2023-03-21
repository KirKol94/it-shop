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
import { IProduct } from '@/types/IProduct'
import CardModal from '@/components/modals/cardModal/CardModal'

interface IProps {
  product: IProduct
}

const RecommendCard: FC<IProps> = ({ product }) => {
  return (
    <>
      <Wrapper>
        <ImgBox>
          <img src={product.image} alt={product.name} />
        </ImgBox>
        <Inner>
          <div>
            <ProductName>{product.name}</ProductName>
          </div>
          <div>
            <Title>{product.name}</Title>
          </div>
          <Footer>
            <Price>{product.price.toLocaleString()} ₽</Price>
            <OldPrice>{product.price.toLocaleString()} ₽</OldPrice>
          </Footer>
        </Inner>
      </Wrapper>

      <CardModal product={product} />
    </>
  )
}

export default RecommendCard
