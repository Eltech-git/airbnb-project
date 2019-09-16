import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
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

class Host extends React.Component {
  state = {
    bookings: [
      {
        picUrl:
          'url("http://www.modellismostatico.it/wp-content/uploads/2017/05/tamiya-35346-carro-armato-modellismo-statico.jpg.thumb_250x200.jpg")',
        type: "Cingolato",
        roomNum: "5",
        title: "Sherman 2",
        priceXN: 3500
      },
      {
        picUrl:
          "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Is-3_lesany.jpg/310px-Is-3_lesany.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Leopard 4",
        priceXN: 3450
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
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
              <Link to="create" className="button primary">
                Host new place
              </Link>
              <hr />
              <h2>Places I'm hosting</h2>
              <div className="grid two">
                {this.state.bookings.map(p => {
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
export default Host;
