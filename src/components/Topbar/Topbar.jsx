import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

import {FaUsers, FaUserPlus} from 'react-icons/fa';


const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <div className="topbar__logo">
          <Link to="/"> <LogoSvg/></Link>
      </div>
      <div className="topbar__group">
          <div className="topbar__icon">
              <Link to="/users"><FaUsers/> <span>Usuários</span> </Link>
              <Link to="/newuser"><FaUserPlus/> <span>Nova Conta</span></Link>
          </div>
      </div>
    </div>
  </header>
);

export default Topbar;
