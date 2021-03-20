import React, { Component } from "react";
import BeerItem from "./BeerItem";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

class AllBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: [],
    };
  }

  componentDidMount() {
    const axios = require("axios");
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) =>
        this.setState({
          beerList: response.data,
        })
      )
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="AllBeerWrapper"
      >
        {this.state.beerList.map((elt) => (
          <BeerItem
            name={elt.name}
            img={elt.image_url}
            tagline={elt.tagline}
            contribute={elt.contributed_by}
            id={elt._id}
          />
        ))}
      </motion.div>
    );
  }
}

export default AllBeer;
