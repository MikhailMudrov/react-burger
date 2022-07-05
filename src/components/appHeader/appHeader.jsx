import React from 'react';
import headerStyles from './appHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Navigation() {
  return (
    <nav className={`pl-5 ${headerStyles.navigation}`}>
      <ul className={headerStyles.menu}>
        <li className={headerStyles.list}>
          <a href='/' className={headerStyles.link}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default pl-2 pr-5">Конструктор</p>
          </a>
        </li>
        <li className={headerStyles.list}>
          <a href='/' className={headerStyles.link}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive pl-2 pr-5">Лента заказов</p>
          </a>
        </li>
      </ul>
    </nav>
  )
}

function Profile() {
  return (
    <div className={headerStyles.link}>
      <ProfileIcon type="secondary" />
      <p className="text text_type_main-default text_color_inactive pl-2 pr-5">Личный кабинет</p>
    </div>
  )
}

export function AppHeader() {
  return (
    <div className={headerStyles.container}>
      <header className={`pt-4 pb-4 ${headerStyles.header}`}>
        <Navigation />
        <Logo />
        <Profile />
      </header>
    </div>
  )
}

export default AppHeader
