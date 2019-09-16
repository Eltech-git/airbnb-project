import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import "../styles/grid.css";

class Thumbnail extends React.Component {
  state = {
    card: this.props.p
  };

  render() {
    return (
      <Link to={`/Place/${this.state.card._id}`} className="card link">
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.state.card.images[0]})`
          }}
        >
          <button className="icon">
            <i className="far fa-heart" />
          </button>
        </div>
        <div className="content">
          <small className="meta">
            {this.state.card.type.name} • {this.state.card.bedrooms} Rooms
          </small>
          <h2>{this.state.card.title}</h2>
          <span className="price">${this.state.card.price}/night</span>
          <span className="rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
            <span>37 Reviews</span>
          </span>
        </div>
      </Link>
    );
  }
}
export default Thumbnail;
