//Imports

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Thumbnail from "./Thumbnail";
import { Link } from "react-router-dom";
import axios from "axios";
require("dotenv").config();
import "../styles/buttons.css";
import "../styles/cards.css";
import "../styles/filters.css";
import "../styles/forms.css";
import "../styles/gallery.css";
import "../styles/global.css";
import "../styles/grid.css";
import "../styles/icons.css";
import "../styles/nav.css";
import "../styles/reviews.css";
import "../styles/sidebar.css";
import "../styles/users.css";

//Class

class Places extends React.Component {
  //state

  state = {
    places: [],
    types: []
  };

  //Modules

  //Willmount

  componentWillMount() {
    axios
      .get(`${process.env.APIURL}/places`)
      .then(res => {
        this.setState({
          places: res.data,
          originalPlaces: res.data
        });
      })
      .catch(err => {});
    axios
      .get(`${process.env.APIURL}/types`)
      .then(res => {
        console.log(res);
        this.setState({
          types: res.data
        });
      })
      .catch(err => {});
  }

  //Functions

  selectType = e => {
    let filtered = this.state.originalPlaces.filter(
      p => p.type._id === e.target.value
    );
    this.setState({
      places: filtered
    });
  };

  selectRoom = e => {
    let filteredRoom = this.state.originalPlaces.filter(
      p => p.bedrooms >= e.target.value
    );
    this.setState({
      places: filteredRoom
    });
  };

  selectPrice = e => {
    let filteredPrice = this.state.originalPlaces.filter(
      p => p.price <= e.target.value
    );
    this.setState({
      places: filteredPrice
    });
  };

  searchPlaces = e => {
    let searchPlace = this.state.originalPlaces.filter(p =>
      p.title.includes(e.target.value)
    );
    this.setState({
      places: searchPlace
    });
  };

  //Render

  render() {
    return (
      <div>
        <Nav />
        <div className="filters">
          <select onChange={this.selectRoom}>
            <option value={1}>Rooms: 1</option>
            <option value={2}>Rooms: 2</option>
            <option value={3}>Rooms: 3</option>
            <option value={4}>Rooms: 4</option>
            <option value={5}>Rooms: 5</option>
            <option value={6}>Rooms: 6</option>
            <option value={7}>Rooms: 7</option>
            <option value={8}>Rooms: 8</option>
            <option value={9}>Rooms: 9</option>
            <option value={10}>Rooms: 10</option>
          </select>
          <select onChange={this.selectType}>
            {this.state.types.map(t => {
              return (
                <option key={t._id} value={t._id}>
                  {t.name}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            onChange={this.selectPrice}
            placeholder="max price"
          />
          <select>
            <option value="date">Latest</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          <input
            type="text"
            className="search"
            onChange={this.searchPlaces}
            placeholder="Search..."
          />
        </div>
        <div className="grid five large">
          {this.state.places.map((p, i) => {
            return <Thumbnail p={p} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
export default Places;
