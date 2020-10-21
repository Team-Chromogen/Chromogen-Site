import React, { Component } from "react";
import Main from "../components/Main";
import Features from "../components/Features";
import Team from "../components/Team";
import styles from "../components/css-modules/Navbar.module.css";
import { AiOutlineGithub, AiFillChrome } from "react-icons/Ai";
import { IconContext } from "react-icons";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default class Homepage extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  /* Navbar component is embedded here */

  render() {
    return (
      <div>
        <IconContext.Provider value={{ size: "50px" }}>
          <nav id={styles.navbar}>
            <ul id={styles.leftNav}>
              <li>
                <a>
                  <img
                    src="/chromogen-logo.png"
                    id={styles.logo}
                    alt="Chromogen Logo"
                    onClick={this.scrollToTop}
                  ></img>
                </a>
              </li>

              <h1 id={styles.title}> &nbsp;Chromogen &nbsp;&nbsp;</h1>
            </ul>

            <ul id={styles.rightNav}>
              <li>
                <Link
                  activeClass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <a href="#" id={styles.navItem}>
                    Features &nbsp;&nbsp;
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <a href="#" id={styles.navItem}>
                    Team
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
        <Main />
        <Element id={styles.features} name="features">
          <Features />
        </Element>
        <Element id={styles.team} name="team">
          <Team />
        </Element>
      </div>
    );
  }
}

/*
<li id={styles.navItem}>
<a
  href="https://github.com/open-source-labs/Chromogen"
  target="_blank"
>
  <AiOutlineGithub />
</a>
</li>
<li id={styles.navItem}>
<a
  href="https://chrome.google.com/webstore/detail/chromogen/cciblhdjhpdbpeenlnnhccooheamamnd?hl=en-US"
  target="_blank"
>
{<AiFillChrome />}
</a>
</li>*/
