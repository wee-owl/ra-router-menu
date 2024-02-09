import React from 'react';
import { NavLink } from "react-router-dom";


function Menu() {
  const activeClass = () => ({ isActive }) => isActive ? 'menu__item menu__item-active' : 'menu__item';

  return (
    <div className='menu'>
      <NavLink to='/ra-router-menu' className={activeClass()}>Главная</NavLink>
      <NavLink to='/drift' className={activeClass()}>Дрифт-такси</NavLink>
      <NavLink to='/timeattack' className={activeClass()}>Time Attack</NavLink>
      <NavLink to='/forza' className={activeClass()}>Forza Karting</NavLink>
    </div>
  );
}

export default Menu;
