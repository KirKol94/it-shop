import React, { FC } from 'react'
import CloseIcon from '@ui/icons/CloseIcon'
import {
  Close,
  CountBox,
  CountBtn,
  CountInput,
  Footer,
  Header,
  Img,
  ImgBox,
  Inner,
  Line,
  Price,
  SizeName,
  Sizes,
  Title,
  Wrapper,
} from './styled'

const CartItem: FC = () => {
  return (
    <Wrapper>
      <ImgBox>
        <Img src="https://thumb.tildacdn.com/stor3666-3538-4430-b532-646533653362/-/cover/432x432/center/center/-/format/webp/87004213.jpg" />
      </ImgBox>
      <Inner>
        <Header>
          <Title>Футболка от Louis Betton</Title>
          <Close>
            <button //onClick={() => setIsOpen(false)}
            >
              <CloseIcon size={32} />
            </button>
          </Close>
        </Header>

        <Sizes>
          <p>Размер:</p>
          <SizeName>XL</SizeName>
        </Sizes>

        <Footer>
          <CountBox>
            <CountBtn
              action="minus"
              // onClick={decrement}
            >
              -
            </CountBtn>
            <CountInput
              type="text"
              inputMode="numeric"
              value={1}
              // value={count}
              // onChange={handleInputChange}
              maxLength={3}
            />
            <CountBtn
              action="plus"
              // onClick={increment}
            >
              +
            </CountBtn>
          </CountBox>
          <Price>9000 ₽</Price>
          <Line></Line>
          <Price>9000 ₽</Price>
        </Footer>
      </Inner>
    </Wrapper>
  )
}

export default CartItem
