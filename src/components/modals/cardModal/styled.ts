import styled from "styled-components";
import { bgColors, fonts, textColors } from "../../../styled/vars";
import { StyledButton } from "../../ui/button/styled";

export const CardModalWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
  flex-direction: column;
  border-radius: 32px;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.4);
  gap: 16px;
`;

export const ImgBox = styled.div`
  overflow: hidden;
  border-radius: 16px 16px 0 0;

  & > img {
    width: 100%;
    max-height: clamp(22.5rem, 7.955rem + 72.73vw, 30rem);
    border-radius: 32px 32px 0 0;
  }
`;

export const Body = styled.div`
  padding: 16px;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 12px;
  color: ${textColors.main};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Description = styled.p`
  margin-bottom: 16px;
  color: ${textColors.main};
  font-family: ${fonts.second};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Footer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 16px 16px;
  column-gap: 16px;
  gap: clamp(0.75rem, -0.826rem + 7.88vw, 1.563rem);
`;

export const Price = styled.span`
  color: ${textColors.main};
  font-size: clamp(1.125rem, 0.883rem + 1.21vw, 1.25rem);
  font-weight: 600;
  line-height: 1.2;
`;

export const Sizes = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  border-radius: 20px;
  background-color: ${bgColors.dark};
`;

export const Selected = styled.div<{ position: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ position }) => position}px;
  width: calc(20%);
  padding: 2px;
  transition: left 200ms ease-out 0s, width;

  &::before {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-color: ${bgColors.accent};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    content: " ";
  }
`;

export const SizeInput = styled.input`
  position: absolute;
  display: none;

  &:checked + label {
    color: ${textColors.main};
    font-weight: 500;
  }
`;

export const SizeLabel = styled.label`
  position: relative;
  display: block;
  flex: 1 1 0;
  border-radius: 9999px;
  color: ${textColors.lightBrown};
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  transition: color 150ms ease 0s, font-weight 0.3s;
  user-select: none;

  &:hover {
    color: ${textColors.main};
  }
`;

export const CountBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CountInput = styled.input`
  width: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  height: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  background-color: ${bgColors.accent};
  color: ${textColors.main};
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

export const CountBtn = styled.span<{ action: "plus" | "minus" }>`
  position: relative;
  width: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  height: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  padding: 10.5px 14.5px;
  user-select: none;
  background-color: ${bgColors.dark};
  color: ${textColors.lightBrown};
  cursor: pointer;
  border-radius: ${({ action }) =>
    action === "minus" ? "20px 0 0 20px" : "0 20px 20px 0"};
`;

export const Button = styled(StyledButton)`
  flex: 1 1 auto;
  color: #fff;
`;
