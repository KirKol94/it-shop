import { IButtonProps } from "./Button";
import styled from "styled-components";

export const StyledButton = styled.button<IButtonProps>`
  padding: ${({ variant }) => (variant === "primary" ? "4px 0" : "10px 22px")};
  border-radius: ${({ variant }) => (variant === "primary" ? "4px" : "16px")};
  transition: background 0.3s, color 0.3s, border 0.3s, box-shadow 0.3s;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "main":
        return "#816e4c";
      case "second":
        return "#2c2c2c";
      case "primary":
        return "#2c2926";
    }
  }};
  backdrop-filter: ${({ variant }) => variant === "second" && "blur(10px)"};
  box-shadow: ${({ variant }) =>
    variant === "second" && "4px 4px 8px rgba(0, 0, 0, 0.25)"};
  font-weight: ${({ variant }) => variant === "primary" && 600};
  font-size: ${({ variant }) => variant === "primary" && "14px"};
  line-height: ${({ variant }) => variant === "primary" && "1.5"};

  &:hover {
    box-shadow: ${({ variant }) => {
      switch (variant) {
        case "main":
          return "inset 4px 4px 8px rgba(0, 0, 0, 0.25)";
        case "second":
          return "inset 4px 4px 8px rgba(0, 0, 0, 0.25)";
        case "primary":
          return "8px 8px 16px rgba(0, 0, 0, 0.25)";
      }
    }}
`;
