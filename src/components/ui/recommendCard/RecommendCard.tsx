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

  return (
    <>
      <Wrapper onClick={() => setIsOpen(true)}>
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

      <CardModal
        product={product}
        isOpenCard={isOpen}
        setIsOpenCard={setIsOpen}
      />
    </>
  )
}

export default RecommendCard
