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
          A Jest unit-test generation tool for applications built with Recoil.js
          and React Hooks. Capture your application's state changes during your
          interaction and auto-generate corresponding test suites.
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
