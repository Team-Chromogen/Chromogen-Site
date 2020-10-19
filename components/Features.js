import React from 'react';
import styles from './css-modules/Features.module.css';

export default function Features() {
  return (
    <section id={styles.features}>
      <h1>Features</h1>
      <ul id={styles.featuresList}>
        <li>The first feature</li>
        <li>The second feature</li>
        <li>The third feature</li>
      </ul>
    </section>
  );
};