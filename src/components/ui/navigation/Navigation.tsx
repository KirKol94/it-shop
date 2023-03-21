import React, { FC } from 'react'
import { NavItem, NavList } from './styled'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { setIsOpenMenu } from '@/store/dialogWindows/dialogWindowsSlice'

interface IProps {
  isVertical?: boolean
}

const Navigation: FC<IProps> = ({ isVertical }) => {
  const dispatch = useAppDispatch()
  const isOpenMenu = useAppSelector(state => state.dialogs.isOpenMenu)

  const onListItemClick = () => {
    isOpenMenu && dispatch(setIsOpenMenu(false))
  }

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
          <NavItem key={i} onClick={onListItemClick}>
            <Link to={link.url}>{link.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </nav>
  )
}

export default Navigation
