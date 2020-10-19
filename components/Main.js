import React from 'react';
import styles from './css-modules/Main.module.css';

export default function Main() {
  return (
    <section id={styles.main}>
      <h1 id={styles.chromogenheader} >Chromogen <img src='/chromogen-logo.png' id={styles.logo} alt='Chromogen Logo'></img></h1>
      <h3 id={styles.description1}>UI-driven test generation tool for React developers</h3>
      <h4 id={styles.description2}>An npm package and Chrome dev tool for apps built with Recoil and React Hooks useState</h4>
      <div id={styles.buttons}>
        <a href="https://www.npmjs.com/package/chromogen" target="_blank"><button type="button" id={styles.links}>NPM Package</button></a>
        <a href="https://chrome.google.com/webstore/detail/chromogen/cciblhdjhpdbpeenlnnhccooheamamnd?hl=en-US" target="_blank"><button type="submit" id={styles.links}>Add to Chrome</button></a>
      </div>
    </section>
  );
};