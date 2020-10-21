import React from "react";
import styles from "./css-modules/Main.module.css";

export default function Main() {
  return (
    <section className={styles.main}>
      <div id={styles.mainLeft}>
        <div id={styles.header}>
          <h1 id={styles.fontHeader}>Chromogen &nbsp;</h1>
        </div>
        <h3 id={styles.description1}>
          UI-driven test generation tool for React developers
        </h3>
        <h4 id={styles.description2}>
          An npm package and Chrome dev tool for apps built with Recoil and
          React Hooks useState Jest unit-test generation tool for Recoil
          selectors. It captures state changes during user interaction and
          auto-generates corresponding test suites. and with one click you'll
          download a ready-to-run Jest test file.
        </h4>
        <div id={styles.allButtons}>
          <a href="https://www.npmjs.com/package/chromogen" target="_blank">
            <button type="button" id={styles.button}>
              NPM Package
            </button>
          </a>

          <a
            href="https://chrome.google.com/webstore/detail/chromogen/cciblhdjhpdbpeenlnnhccooheamamnd?hl=en-US"
            target="_blank"
          >
            <button type="submit" id={styles.button}>
              Chrome Extension
            </button>
          </a>

          <a
            href="https://github.com/open-source-labs/Chromogen"
            target="_blank"
          >
            <button type="button" id={styles.button}>
              GitHub
            </button>
          </a>
        </div>
      </div>
      <div id={styles.mainRight}>
        <img
          src="/chromogen-logo.png"
          id={styles.logo}
          alt="Chromogen Logo"
        ></img>
      </div>
    </section>
  );
}
