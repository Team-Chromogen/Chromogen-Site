import React from 'react';
import styles from './Navbar.module.css';
import { AiOutlineGithub, AiFillChrome } from 'react-icons/Ai'
import { IconContext } from 'react-icons';

export default function Navbar() {
  return (
    <IconContext.Provider value={{ size: '50px' }}>
    <nav id={styles.navbar}>
      <ul id={styles.leftNav}>
        <li id={styles.navItem}><a><img src='/chromogen-logo.png' id={styles.logo} alt='Chromogen Logo'></img></a></li>
        <li id={styles.navItem}><a>Features</a></li>
        <li id={styles.navItem}><a>Team</a></li>
      </ul>
      <ul id={styles.rightNav}>
          <li id={styles.navItem}><a><AiOutlineGithub /></a></li>
          <li id={styles.navItem}><a><AiFillChrome /></a></li>
      </ul>
    </nav>
    </IconContext.Provider>

  );
};