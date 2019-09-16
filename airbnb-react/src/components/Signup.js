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

class Signup extends React.Component {
  state = {};
  render() {
    return (
      <div className="grid center middle tall image">
        <div className="card small">
          <div className="content">
            <div
              className="logo"
              style={{ backgroundImage: 'url("/logo-airbnb.png")' }}
            />
            <form>
              <div className="group">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="group">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="group">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="group">
                <label>Location</label>
                <input type="text" />
              </div>
              <div className="group">
                <label>Profile Picture</label>
                <input type="file" />
              </div>
              <button className="primary">Signup</button>
            </form>
            <p className="footer">
              Already have an account? <a href>Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
