import React, { FC } from "react";

interface IProps {
  size?: number;
  stroke?: string;
}

const SearchIcon: FC<IProps> = ({ size = 20, stroke = "#FFFFFF" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.971 12.8291L19 19.0013M15.0678 8.19969C15.0678 12.1767 11.9186 15.4007 8.03391 15.4007C4.14919 15.4007 1 12.1767 1 8.19969C1 4.2227 4.14919 0.998711 8.03391 0.998711C11.9186 0.998711 15.0678 4.2227 15.0678 8.19969Z"
      stroke={stroke}
    />
  </svg>
);

export default SearchIcon;
