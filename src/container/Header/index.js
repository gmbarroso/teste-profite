import React from 'react'
import Search from '../../component/Search'

import logo from '../../img/google.png';
import user from '../../img/user.svg';
import miniCart from '../../img/minicart.png';
import brFlag from '../../img/flags/BR.png';
import esFlag from '../../img/flags/ES.png';
import gbFlag from '../../img/flags/GB.png';

import '../../index.css'
import './style.css'

const Header = () => (
  <header className="header">
    <div className="logoDiv">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="searchDiv">
      <Search />
    </div>
    <div className="subMenu">
      <div className="myAccountDiv">
        <img src={user} className="myAccountUser" alt="user" />
        <span className="myAccountText"> Minha Conta </span>
      </div>
      <div className="miniCart">
        <img src={miniCart} className="miniCartIcon" alt="miniCart" />
      </div>
      <div className="flags">
        <img src={brFlag} className="brFlag" alt="brFlag" />
        <img src={esFlag} className="esFlag" alt="esFlag" />
        <img src={gbFlag} className="gbFlag" alt="gbFlag" />
      </div>
    </div>
  </header>
)

export default Header