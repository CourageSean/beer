import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="homeWrapper">
          <div className="heroBackground"></div>

          <div className="home-center-img">
            <img
              src="https://bierverpackungkaufen.de/wp-content/uploads/2018/03/vd_grolsch4xbeugel.png"
              alt=""
            />
          </div>
          <Link to="/allbeer" className="allbeerBtn">
            All Beer
          </Link>

          <Carousel />
        </div>
      </motion.div>
    );
  }
}

export default Home;
