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
              <img src="devToolDemo.gif" />
              <h3 id={styles.slideText}>
                Captures state changes for Recoil.js selectors
              </h3>
            </div>
            <div>
              <img src="" />
              <h3 id={styles.slideText}>
                Checks the test suite created for an application
              </h3>
            </div>
            <div>
              <img src="" />
              <h3 id={styles.slideText}>
                Exists as a Chrome Extension for easy accessibility
              </h3>
            </div>
            <div>
              <img src="hooksDemo.gif" />
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
