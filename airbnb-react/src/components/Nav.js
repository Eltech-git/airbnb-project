import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

class Nav extends React.Component {
  state = {
    navData: {
      name: "Emiliano",
      picture: 'url("https://randomuser.me/api/portraits/men/9.jpg")',
      logo: "url('/logo-airbnb.png')"
    }
  };

  render() {
    return (
      <nav>
        <Link
          to="/places"
          className="logo"
          style={{ backgroundImage: this.state.navData.logo }}
        ></Link>
        <div className="profile">
          <Link to="/Profile" className="button">
            <span
              className="avatar"
              style={{ backgroundImage: this.state.navData.picture }}
            />
            <span>{this.state.navData.name}</span>
          </Link>
        </div>
      </nav>
    );
  }
}
export default Nav;
