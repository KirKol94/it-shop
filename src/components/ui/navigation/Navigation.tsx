import React, { Dispatch, FC } from 'react'
import { NavItem, NavList } from './styled'
import { Link } from 'react-router-dom'

interface IProps {
  isVertical?: boolean
  setIsOpenMenu: Dispatch<boolean>
}

const Navigation: FC<IProps> = ({ isVertical, setIsOpenMenu }) => {
  const links = [
    { name: 'Главная', url: '' },
    { name: 'Каталог', url: '' },
    { name: 'О нас', url: 'about' },
    { name: 'Оплата и доставка', url: '' },
  ]

  const OnMenuClose = () => isVertical && setIsOpenMenu(false)

  return (
    <nav>
      <NavList isVertical={isVertical}>
        {links.map((link, i) => (
          <NavItem key={i} onClick={OnMenuClose}>
            <Link to={link.url}>{link.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </nav>
  )
}

export default Navigation
