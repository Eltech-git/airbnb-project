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

class Confirm extends React.Component {
  state = {
    bookings: [
      {
        picUrl:
          'url("https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg")',
        type: "Entire villa",
        roomNum: "5",
        title: "Santiago Surabaja Romina Peròn",
        priceXN: 350
      }
    ]
  };
  render() {
    return (
      <div>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <div className="sidebar">
              <div className="card link">
                <div>
                  {this.state.bookings.map(p => {
                    return <Thumbnail p={p} />;
                  })}
                </div>
              </div>
            </div>
            <div className="content">
              <h2>Confirm Booking</h2>
              <form>
                <div className="group">
                  <label>From</label>
                  <input type="text" defaultValue="12/11/2019" />
                </div>
                <div className="group">
                  <label>To</label>
                  <input type="text" defaultValue="15/11/2019" />
                </div>
                <div className="group">
                  <label>Guests</label>
                  <select>
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option selected>4 guests</option>
                    <option>5 guests</option>
                    <option>6 guests</option>
                    <option>7 guests</option>
                    <option>8 guests</option>
                    <option>9 guests</option>
                    <option>10 guests</option>
                  </select>
                </div>
                <div className="group">
                  <label>Total: 3 nights</label>
                  <h2>$1,050</h2>
                </div>
                <button className="primary">Confirm</button>
              </form>
              <hr />
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Confirm;
