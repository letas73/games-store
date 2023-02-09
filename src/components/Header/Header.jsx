import React from 'react'
import { Link } from "react-router-dom";
import CartBlock from '../CartBlock/CartBlock';

import style from './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo">
          Game Store
        </Link>
      </div>
      <div className="header__wrapper header__cart">
        <CartBlock />
      </div>
    </header>
  );
}

export default Header