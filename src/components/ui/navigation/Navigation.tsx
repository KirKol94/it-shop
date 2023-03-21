import React, { FC } from 'react'
import { NavItem, NavList } from './styled'
import { Link } from 'react-router-dom'

interface IProps {
  isVertical?: boolean
}

const Navigation: FC<IProps> = ({ isVertical }) => {
  const links = [
    { name: 'Главная', url: '' },
    { name: 'Каталог', url: '' },
    { name: 'О нас', url: 'about' },
    { name: 'Оплата и доставка', url: '' },
  ]

  return (
    <nav>
      <NavList isVertical={isVertical}>
        {links.map((link, i) => (
          <NavItem key={i}>
            <Link to={link.url}>{link.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </nav>
  )
}

export default Navigation
