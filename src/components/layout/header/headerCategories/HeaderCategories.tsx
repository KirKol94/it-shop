import React, { FC } from "react";
import SearchIcon from "../../../icons/SearchIcon";
import ArrowIcon from "../../../icons/ArrowIcon";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { setSearchProductValue } from "../../../../store/products/productSlice";
import {
  CategoryLink,
  Container,
  Input,
  InputBox,
  List,
  SearchIconBox,
  Wrapper,
} from "./styled";

const HeaderCategories: FC = () => {
  const dispatch = useAppDispatch();

  const searchProductValue = useAppSelector(
    (state) => state.product.searchProductValue
  );

  const links = [
    { to: "", name: "Главная" },
    { to: "catalog", name: "Каталог" },
    { to: "home-page", name: "Доставка и оплата" },
    { to: "unknown", name: "О нас" },
  ];

  return (
    <Wrapper>
      <Container>
        <nav>
          <List>
            {links.map(({ to, name }) => (
              <li key={to}>
                <CategoryLink to={to}>
                  {name}
                  {name === "Каталог" && <ArrowIcon />}
                </CategoryLink>
              </li>
            ))}
          </List>
        </nav>

        <InputBox>
          <Input
            placeholder="Поиск"
            value={searchProductValue}
            onChange={(e) => dispatch(setSearchProductValue(e.target.value))}
            type="text"
          />
          <SearchIconBox>
            <SearchIcon />
          </SearchIconBox>
        </InputBox>
      </Container>
    </Wrapper>
  );
};

export default HeaderCategories;