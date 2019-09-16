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

class Profile extends React.Component {
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
            <Sidebar />
            <div className="content">
              <h2>My Profile</h2>
              <form>
                <div className="group">
                  <label>Name</label>
                  <input type="text" defaultValue="Emiliano" />
                </div>
                <div className="group">
                  <label>Email</label>
                  <input
                    type="email"
                    defaultValue="emilianolombarditech@gmail.com"
                  />
                </div>
                <div className="group">
                  <label>Location</label>
                  <input type="text" defaultValue="Italy" />
                </div>
                <div className="group">
                  <label>Profile Picture</label>
                  <div className="user">
                    <div
                      className="avatar"
                      style={{
                        backgroundImage: 'url("")'
                      }}
                    />
                    <div className="name">
                      <input type="file" />
                    </div>
                  </div>
                </div>
                <button>Save Changes</button>
              </form>
              <hr />
              <button className="secondary">Logout</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
