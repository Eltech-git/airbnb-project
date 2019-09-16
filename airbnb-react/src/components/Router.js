import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Thumbnail from "./Thumbnail";
import Gallery from "./Gallery";
import Review from "./Review";
import BookingsPage from "./BookingsPage";
import Place from "./Place";
import Confirm from "./Confirm";
import Create from "./Create";
import Favorites from "./Favorites";
import Host from "./Host";
import Places from "./Places";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
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

class Router extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/bookingsPage" component={BookingsPage} />
          <Route path="/Confirm" component={Confirm} />
          <Route path="/Create" component={Create} />
          <Route path="/Favorites" component={Favorites} />
          <Route path="/Host" component={Host} />
          <Route path="/Login" component={Login} />
          <Route path="/Place/:_id" component={Place} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Signup" component={Signup} />
          <Route path="/" component={Places} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
