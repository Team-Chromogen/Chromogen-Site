import React from 'react';
import styles from './Team.module.css'

export default function Team() {
  return (
    <section id={styles.team}>
      <h1>Meet The Team</h1>
      <h3 id="teamHeader">Chromogen 1.0</h3>
      <div className="teamProfiles">
        <div id="individual">Connor Rose Delisle</div>
        <div id="individual">Michelle Holland</div>
        <div id="individual">Jim Chen</div>
        <div id="individual">Andy Wang</div>
      </div>
      <h3 id="teamHeader">Chromogen 2.0</h3>
      <div className="teamProfiles">
        <div id="individual">Nicholas Shay</div>
        <div id="individual">Jinseon Shin</div>
        <div id="individual">Amy Yee</div>
        <div id="individual">Cameron Greer</div>
        <div id="individual">Ryan Tumel</div>
      </div>
    </section>
  );
};