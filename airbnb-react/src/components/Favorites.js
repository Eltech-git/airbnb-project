import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Thumbnail from "./Thumbnail";
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

class Favorites extends React.Component {
  state = {
    places: this.props.p
  };
  render() {
    return (
      <div>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar />
            <div className="content">
              <h2>My Favorites</h2>
              <div className="grid two">
                {this.state.places.map(p => {
                  return <Thumbnail p={p} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Favorites;
