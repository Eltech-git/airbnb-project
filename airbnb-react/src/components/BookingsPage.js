import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Thumbnail from "./Thumbnail";
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

class BookingsPage extends React.Component {
  state = {
    places: []
  };

  componentWillMount() {
    axios.get(`${process.env.APIURL}/places`).then(res => {
      this.setState({
        places: res.data,
        originalPlaces: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar />
            <div className="content">
              <h2>Upcoming Trips</h2>
              <div className="grid two"></div>
              <h2>Past Trips</h2>
              <div className="grid two">
                {this.state.places.map(p => {
                  return <Thumbnail p={p} />;
                })}
              </div>
              <table>
                {this.state.places.map(b => {
                  return (
                    <tr>
                      <td>{b.title}</td>
                      <td>{b.price}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookingsPage;
