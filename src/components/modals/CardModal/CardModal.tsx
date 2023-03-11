import React, { FC, useEffect, useRef, useState } from "react";
import Modal from "../../ui/Modal/Modal";
import { IProduct } from "../../../types/IProduct";
import {
  Body,
  Button,
  CardModalWrapper,
  CountBox,
  CountBtn,
  CountInput,
  Description,
  Footer,
  ImgBox,
  Price,
  Selected,
  SizeInput,
  SizeLabel,
  Sizes,
  Title,
} from "./styled";

interface IProps {
  product: IProduct;
  isOpenCard: boolean;
  setIsOpenCard: (isOpenCard: boolean) => void;
}

const CardModal: FC<IProps> = ({ isOpenCard, setIsOpenCard, product }) => {
  const sizes = ["xs", "s", "m", "l", "xl"];
  const [size, setSize] = useState(sizes[0]);
  const [count, setCount] = useState(1);
  const price = product.price * +count;

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  // разрешаем вводить только цифры
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*$/;
    const value = e.target.value;
    if (regex.test(value) && +value !== 0) {
      setCount(+value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpenCard(false);
    setCount(1);
    console.log(
      `товар: ${product.name} на сумму: ${price}\nразмер: ${size}\nколичествр: ${count}`
    );
  };

  // далее код, передвигающий ползунок в размерах
  const [position, setPosition] = useState(0);
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (labelRef.current) {
      setPosition(labelRef.current.offsetLeft);
    }
  }, [size]);

  return (
    <Modal isOpen={isOpenCard} setIsOpen={() => setIsOpenCard(false)}>
      <CardModalWrapper>
        <ImgBox>
          <img src={product.image} alt={product.name} />
        </ImgBox>

        <Body>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>

          <Sizes>
            <Selected position={position}></Selected>
            {sizes.map((value) => (
              <React.Fragment key={value}>
                <SizeInput
                  type="radio"
                  id={`sizes__input_${value}`}
                  name={"size"}
                  value={value}
                  readOnly={true}
                  checked={value === size}
                />
                <SizeLabel
                  ref={value === size ? labelRef : null}
                  onClick={() => setSize(value)}
                  htmlFor={`sizes__input_${value}`}
                >
                  {value}
                </SizeLabel>
              </React.Fragment>
            ))}
          </Sizes>
        </Body>

        <Footer onSubmit={handleSubmit}>
          <Price>{price.toLocaleString("ru")} ₽</Price>
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
          <Button type="submit" variant="main" onClick={() => {}}>
            В корзину
          </Button>
        </Footer>
      </CardModalWrapper>
    </Modal>
  );
};

export default CardModal;
