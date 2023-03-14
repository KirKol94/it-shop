import React from 'react'
import CloseIcon from '@ui/icons/CloseIcon'

import {
  Wrapper,
  Img,
  ImgBox,
  Inner,
  Header,
  Price,
  Title,
  Sizes,
  SizeName,
  Footer,
} from './styled'

const CartItem = () => {
  const sizes = ['l', 'xl']

  return (
    <Wrapper>
      <ImgBox>
        <Img />
      </ImgBox>
      <Inner>
        <Header>
          <Title></Title>
          <CloseIcon size={20} />
        </Header>

        <Sizes>
          <p>Размер:</p>
          {sizes.map(size => {
            ;<SizeName key={size}>{size}</SizeName>
          })}
        </Sizes>

        <Footer>
          <CountBox>
            <CountBtn action="minus" onClick={decrement}>
              -
            </CountBtn>
            <CountInput
              type="text"
              inputMode="numeric"
              value={count}
              onChange={handleInputChange}
              maxLength={3}
            />
            <CountBtn action="plus" onClick={increment}>
              +
            </CountBtn>
          </CountBox>
          <Price>₽</Price>
        </Footer>
      </Inner>
    </Wrapper>
  )
}

export default CartItem
