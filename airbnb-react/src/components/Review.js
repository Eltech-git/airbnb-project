import React from "react";
import moment from "moment";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Review extends React.Component {
  state = {
    review: this.props.p
  };

  render() {
    return (
      <div className="card review">
        <div className="content">
          <div className="user">
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${this.state.review.author.avatar})`
              }}
            />
            <div className="name">
              <small>
                {moment(this.state.review.date).format("DD MMMM YYYY")}
              </small>
              <span>{this.state.review.author.name}</span>
            </div>
          </div>
          <div className="rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>{this.state.review.content}</p>
        </div>
      </div>
    );
  }
}
export default Review;
