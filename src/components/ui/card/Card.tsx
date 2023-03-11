import React, { FC, useState } from "react";
import CardModal from "../../modals/cardModal/CardModal";
import { IProduct } from "../../../types/IProduct";
import {
  Wrapper,
  Img,
  ImgBox,
  Price,
  Title,
  Body,
  Description,
  Footer,
  Button,
} from "./styled";

interface IProps {
  product: IProduct;
}

const Card: FC<IProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <ImgBox onClick={() => setIsOpen(true)}>
          <Img src={product.image} alt={product.name} />
        </ImgBox>

        <Body>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
        </Body>

        <Footer>
          <Price>{product.price.toLocaleString("ru")} ₽</Price>
          <Button variant="primary" onClick={() => setIsOpen(true)}>
            Подробнее
          </Button>
        </Footer>
      </Wrapper>

      <CardModal
        isOpenCard={isOpen}
        setIsOpenCard={setIsOpen}
        product={product}
      />
    </>
  );
};

export default Card;
