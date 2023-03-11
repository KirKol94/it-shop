import { StyledButton } from "../button/styled";
import styled from "styled-components";
import { cutLongStringStyles } from "../../../styled/mixins";
import { fonts, gradients, textColors } from "../../../styled/vars";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 280px;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 16px;
  background: ${gradients.main};
  transition: all 0.5s;

  &:hover {
    background: linear-gradient(180deg, #1d1e1e 0%, #6222b791 100%);

    img {
      transform: scale(1.05);
      filter: drop-shadow(0px 0px 32px rgba(255, 255, 255, 0.25));
    }
  }
`;

export const ImgBox = styled.div`
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

export const Img = styled.img`
  height: 100%;
  flex: 1 0 auto;
  border-radius: 16px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
`;

export const Body = styled.div`
  flex: 1 1 auto;
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  color: ${textColors.main};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  ${cutLongStringStyles(2)}
`;

export const Description = styled.p`
  color: ${textColors.main};
  font-family: ${fonts.second};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  ${cutLongStringStyles(4)}
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Price = styled.span`
  color: ${textColors.main};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
`;

export const Button = styled(StyledButton)`
  flex: 0 1 160px;
  color: ${textColors.main};
`;
