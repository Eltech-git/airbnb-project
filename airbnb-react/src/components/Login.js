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

class Login extends React.Component {
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
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="group">
                <label>Password</label>
                <input type="password" />
              </div>
              <button className="primary">Login</button>
            </form>
            <p className="footer">
              New to Airbnb? <a href>Signup</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
