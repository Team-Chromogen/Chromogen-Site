import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./css-modules/Features.module.css";

export default class Features extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section id={styles.features}>
        <div>
          <h1 id={styles.featuresHeader}> Features </h1>
          <br></br>
          <br></br>
        </div>
        <div id={styles.slides}>
          <Slider {...settings} id={styles.featuresList}>
            {/* <h1>Features</h1> */}
            <div>
              <img src="https://files.slack.com/files-pri/T015Z0WPH0D-F01D22P2LDR/c17b5869480026965fa7c9a7657e0470.gif" />
              <h3 id={styles.slideText}>
                Captures state changes for Recoil.js selectors
              </h3>
            </div>
            <div>
              <img src="https://files.slack.com/files-pri/T015Z0WPH0D-F01D23T589H/test-output-1.png" />
              <h3 id={styles.slideText}>
                Checks the test suite created for an application
              </h3>
            </div>
            <div>
              <img src="https://files.slack.com/files-pri/T015Z0WPH0D-F01D1TDBL4S/dev_tool.gif" />
              <h3 id={styles.slideText}>
                Exists as a Chrome Extension for easy accessibility
              </h3>
            </div>
            <div>
              <img src="https://files.slack.com/files-pri/T015Z0WPH0D-F01CYTGCQHK/hooks.gif" />
              <h3 id={styles.slideText}>
                Captures state changes for React Hooks useState hooks
              </h3>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
