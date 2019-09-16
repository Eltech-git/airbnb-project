import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/sidebar.css";
import "../styles/grid.css";

class Sidebar extends React.Component {
  state = {
    active: false
  };

  toggleBox = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  render() {
    return (
      <div className="grid sidebar-left">
        <div className="sidebar">
          <ul>
            <li className="">
              <Link to="/Profile">Profile</Link>
            </li>
            <li className="active">
              <Link to="/BookingsPage">Bookings</Link>
            </li>
            <li className="" onClick={this.toggleBox}>
              <Link to="/Favorites">Favorites</Link>
            </li>
            <li className="">
              <Link to="/Host">Host</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;
