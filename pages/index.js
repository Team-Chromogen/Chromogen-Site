import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Features from '../components/Features';
import Team from '../components/Team';
import styles from '../components/Navbar.module.css';
import { AiOutlineGithub, AiFillChrome } from 'react-icons/Ai'
import { IconContext } from 'react-icons';
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  

    render() {
      return (
        <div>
          <IconContext.Provider value={{ size: '50px' }}>
          <nav id={styles.navbar}>
            <ul id={styles.leftNav}>
              <li id={styles.navItem}>
                <a><img src='/chromogen-logo.png' id={styles.logo} alt='Chromogen Logo' onClick={this.scrollToTop}></img></a>
              </li>
              <li id={styles.navItem}>
                <Link activeClass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  <a href="#">Features</a>
                </Link>
              </li>
              <li id={styles.navItem}>
                <Link activeClass="active"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <a href="#">Team</a>
                  </Link>
              </li>
            </ul>
            <ul id={styles.rightNav}>
                <li id={styles.navItem}><a href="https://github.com/open-source-labs/Chromogen" target="_blank"><AiOutlineGithub /></a></li>
                <li id={styles.navItem}><a href="https://chrome.google.com/webstore/detail/chromogen/cciblhdjhpdbpeenlnnhccooheamamnd?hl=en-US" target="_blank"><AiFillChrome /></a></li>
            </ul>
          </nav>
          </IconContext.Provider>
          <Main />
          <Element name="features"><Features /></Element>
          <Element name="team"><Team /></Element>
      </div>
      )
    }
}

// function HomePage() {
//   return (
//     <div>
//       <Navbar />
//       <Main />
//       <Features />
//       <Team />
//     </div>
//   )
// }

// export default HomePage;