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
              <a href="https://github.com/connorrose" target="_blank" id={styles.githubLink}>
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/connorrosedelisle"
                target="_blank"
                id={styles.linkedinLink}
              >
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
              <a
                href="https://github.com/michellebholland"
                target="_blank"
                id={styles.githubLink}
              >
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/michellebholland"
                target="_blank"
                id={styles.linkedinLink}
              >
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
              <a href="https://github.com/andywang23" target="_blank" id={styles.githubLink}>
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/andy-wang23/"
                target="_blank"
                id={styles.linkedinLink}
              >
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
              <a href="https://github.com/chenchingk" target="_blank" id={styles.githubLink}>
                <AiOutlineGithub />
              </a>
              <a href="" id={styles.linkedinLink} target="_blank">
                <GrLinkedin />
              </a>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>

        <div id={styles.teamProfiles}>
          <div id="individual">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQEeCnAZRgST9Q/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=1aGCazRr9QdzKXfyL6sQz5UMl-_Idf9SpHQPfRnCPY4"
              id={styles.profileImage}
            />
            <h3 id={styles.name}>Nicholas Shay</h3>
            <div id={styles.profileLinks}>
              <a href="https://github.com/nicholasjs" target="_blank" id={styles.githubLink}>
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nicholasjs/"
                target="_blank"
                id={styles.linkedinLink}
              >
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
              <a href="https://github.com/wlstjs" target="_blank" id={styles.githubLink}>
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jinseonshin/"
                target="_blank"
                id={styles.linkedinLink}
              >
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHJz67MSeI7Pw/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=E1Lf--QoVaRPClVVxGjEhUAort0G1UHyM2IdIkUdV_0"
              id={styles.profileImage}
            />
            <h3 id={styles.name}>Amy Yee</h3>
            <div id={styles.profileLinks}>
              <a href="https://github.com/amyy98" target="_blank" id={styles.githubLink}>
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/amyyee98/"
                target="_blank"
                id={styles.linkedinLink}
              >
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGVS66UliP03A/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=Hw09TN_ObXiVzmBLbIRfUyVvfskRBc_F9vXt9AYy72Y"
              id={styles.profileImage}
            />
            <h3 id={styles.name}>Cameron Greer</h3>
            <div id={styles.profileLinks}>
              <a href="https://github.com/cgreer011" target="_blank" id={styles.githubLink}>
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/cameron-greer/"
                target="_blank"
                id={styles.linkedinLink}
              >
                <GrLinkedin />
              </a>
            </div>
          </div>
          <div id="individual">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEfadHTTgopog/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=G_ZYBPIbzTeJfZPELKiAoNeHNFnHwukX02E2v1-jZ9c"
              id={styles.profileImage}
            />
            <h3 id={styles.name}>Ryan Tumel</h3>
            <div id={styles.profileLinks}>
              <a href="https://github.com/rtumel123" target="_blank" id={styles.githubLink}>
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-tumel-6a92791a0/"
                target="_blank"
                id={styles.linkedinLink}
              >
                <GrLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}
