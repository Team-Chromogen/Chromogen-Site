import React from 'react';
import styles from './Navbar.module.css';
import { AiOutlineGithub, AiFillChrome } from 'react-icons/Ai'
import { IconContext } from 'react-icons';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <IconContext.Provider value={{ size: '50px' }}>
    <nav id={styles.navbar}>
      <ul id={styles.leftNav} className="nav-items">
        <li id={styles.navItem} className="nav-item">
          <a href="#" onClick={console.log('test')}><img src='/chromogen-logo.png' id={styles.logo} alt='Chromogen Logo'></img></a></li>
        <li id={styles.navItem} className="nav-item">
          <a href="#" onClick={console.log('test')}>Features</a>
        </li>
        <li id={styles.navItem} className="nav-item">
          <a>Team</a>
          </li>
      </ul>
      <ul id={styles.rightNav}>
          <li id={styles.navItem}><a href="https://github.com/open-source-labs/Chromogen" target="_blank"><AiOutlineGithub /></a></li>
          <li id={styles.navItem}><a href="https://chrome.google.com/webstore/detail/chromogen/cciblhdjhpdbpeenlnnhccooheamamnd?hl=en-US" target="_blank"><AiFillChrome /></a></li>
      </ul>
    </nav>
    </IconContext.Provider>
  );
};