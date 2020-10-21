import React from "react";
import styles from "./css-modules/Team.module.css";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/Ai";
import { GrLinkedin } from "react-icons/Gr";

export default function Team() {
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <section id={styles.team}>
        <h1 id={styles.teamHeader}>Meet the Team</h1>
        <br></br>
        <div id={styles.teamProfiles}>
          <div id="individual">
            <img
              src="https://avatars1.githubusercontent.com/u/42079810"
              id={styles.profileImage}
            />
            <h3 id={styles.name}>Connor Rose Delisle</h3>
            <div id={styles.profileLinks}>
              <a href="">
                <AiOutlineGithub />
              </a>
              <a href="">
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img
              src="https://avatars3.githubusercontent.com/u/64747593"
              id={styles.profileImage}
            />
            <h3 id={styles.name}>Michelle Holland</h3>
            <div id={styles.profileLinks}>
              <a href="">
                <AiOutlineGithub />
              </a>
              <a href="">
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img
              src="https://avatars1.githubusercontent.com/u/64433815"
              id={styles.profileImage}
            />
            <h3 id={styles.name}>Andy Wang</h3>
            <div id={styles.profileLinks}>
              <a href="">
                <AiOutlineGithub />
              </a>
              <a href="">
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img
              src="https://avatars0.githubusercontent.com/u/40308081"
              id={styles.profileImage}
            />
            <h3 id={styles.name}>Jim Chen</h3>
            <div id={styles.profileLinks}>
              <a href="">
                <AiOutlineGithub />
              </a>
              <a href="">
                <GrLinkedin />
              </a>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>

        <div id={styles.teamProfiles}>
          <div id="individual">
            <img id={styles.profileImage} />
            <h3 id={styles.name}>Nicholas Shay</h3>
            <div id={styles.profileLinks}>
              <a href="">
                <AiOutlineGithub />
              </a>
              <a href="">
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img
              src="https://avatars1.githubusercontent.com/u/68680285?s=400&u=5b89d376d4d27a77442b74dcfe1c9c4025ce6453&v=4"
              id={styles.profileImage}
            />
            <h3 id={styles.name}>Jinseon Shin</h3>
            <div id={styles.profileLinks}>
              <a href="">
                <AiOutlineGithub />
              </a>
              <a href="">
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img id={styles.profileImage} />
            <h3 id={styles.name}>Amy Yee</h3>
            <div id={styles.profileLinks}>
              <a href="">
                <AiOutlineGithub />
              </a>
              <a href="">
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img id={styles.profileImage} />
            <h3 id={styles.name}>Cameron Greer</h3>
            <div id={styles.profileLinks}>
              <a href="">
                <AiOutlineGithub />
              </a>
              <a href="">
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img id={styles.profileImage} />
            <h3 id={styles.name}>Ryan Tumel</h3>
            <div id={styles.profileLinks}>
              <a href="">
                <AiOutlineGithub />
              </a>
              <a href="">
                <GrLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}
