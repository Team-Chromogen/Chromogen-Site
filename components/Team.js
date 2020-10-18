import React from 'react';
import styles from './Team.module.css';
import { IconContext } from 'react-icons';
import { AiOutlineGithub } from 'react-icons/Ai';
import { GrLinkedin } from 'react-icons/Gr';

export default function Team() {
  return (
    <IconContext.Provider value={{ size: '30px' }}>
    <section id={styles.team}>
      <h1>Meet The Team</h1>
      
      <h3 id="teamHeader">Chromogen 1.0</h3>
      <div id={styles.teamProfiles}>
        <div id="individual">
          <img id={styles.profileImage} />
          <h3>Connor Rose Delisle</h3>
          <div id={styles.profileLinks}>
            <a><AiOutlineGithub /></a>
            <a><GrLinkedin /></a>
          </div>
        </div>
        <div id="individual">
          <img id={styles.profileImage} />
          <h3>Michelle Holland</h3>
          <div id={styles.profileLinks}>
            <a><AiOutlineGithub /></a>
            <a><GrLinkedin /></a>
          </div>
        </div>
        <div id="individual">
          <img id={styles.profileImage} />
          <h3>Andy Wang</h3>
          <div id={styles.profileLinks}>
            <a><AiOutlineGithub /></a>
            <a><GrLinkedin /></a>
          </div>
        </div>
        <div id="individual">
          <img id={styles.profileImage} />
          <h3>Jim Chen</h3>
          <div id={styles.profileLinks}>
            <a><AiOutlineGithub /></a>
            <a><GrLinkedin /></a>
          </div>
        </div>
      </div>
      <hr id={styles.hr}></hr>
      <h3 id="teamHeader">Chromogen 2.0</h3>
      <div id={styles.teamProfiles}>
        <div id="individual">
          <img id={styles.profileImage} />
          <h3>Nicholas Shay</h3>
          <div id={styles.profileLinks}>
            <a><AiOutlineGithub /></a>
            <a><GrLinkedin /></a>
          </div>
        </div>
        <div id="individual">
          <img id={styles.profileImage} />
          <h3>Jinseon Shin</h3>
          <div id={styles.profileLinks}>
            <a><AiOutlineGithub /></a>
            <a><GrLinkedin /></a>
          </div>
        </div>
        <div id="individual">
          <img id={styles.profileImage} />
          <h3>Amy Yee</h3>
          <div id={styles.profileLinks}><a>
            <AiOutlineGithub /></a>
            <a><GrLinkedin /></a>
          </div>
        </div>
        <div id="individual">
          <img id={styles.profileImage} />
          <h3>Cameron Greer</h3>
          <div id={styles.profileLinks}>
            <a><AiOutlineGithub /></a>
            <a><GrLinkedin /></a>
          </div>
        </div>
        <div id="individual">
          <img id={styles.profileImage} />
          <h3>Ryan Tumel</h3>
          <div id={styles.profileLinks}>
            <a><AiOutlineGithub /></a>
            <a><GrLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
    </IconContext.Provider>
  );
};