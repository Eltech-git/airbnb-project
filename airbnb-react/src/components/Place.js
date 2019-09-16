import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Thumbnail from "./Thumbnail";
import Gallery from "./Gallery";
import Review from "./Review";
import axios from "axios";
import DatePicker from "react-datepicker";
require("dotenv").config();
import "react-datepicker/dist/react-datepicker.css";
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

class Place extends React.Component {
  state = {
    place: {
      host: {
        avatar: ""
      },
      type: {
        name: ""
      },
      amenities: [
        {
          _id: "",
          name: "",
          icon: ""
        }
      ],
      images: [],
      reviews: []
    },
    reviewTextPost: " ",
    reviewRatingPost: 0,
    bookingStartDate: new Date(),
    bookingFinishDate: new Date()
  };
  handleChange = date => {
    this.setState({
      bookingStartDate: date
    });
  };
  handleChange2 = date => {
    this.setState({
      bookingFinishDate: date
    });
  };

  reviewTextAdd = e => {
    this.setState({
      reviewTextPost: e.target.value
    });
  };

  postReview = e => {
    //uso prevent default per impedire alla pagina di ricaricare
    e.preventDefault();
    //uso axios per comunicare con l'api, metto .post per inserire dati nel database
    axios
      .post(`${process.env.APIURL}/reviews`, {
        //creo il form delle review assegnado delle variabili nello state che poi mi andro a riprendere per inviarle all api
        rating: this.state.reviewRatingPost,
        content: this.state.reviewTextPost,
        place: this.state.place._id,
        // token: localStorage.getItem('key')
        author: "5d75eda8f751cd4e45ce14ad"
      })
      .then(res => {
        //poi la risposta dell api la devo andare ad inserire nelle review che sono presenti nello state dove ho caricato il place. per fare questo copio tutto il place e vado a pushare il res.data nell array delle review di questo place.alla fine cambio lo state con setstate
        let place = this.state.place;
        place.reviews.push(res.data);
        this.setState({
          place: place
        });
      });
  };
  //${this.props.match.params.id}
  componentWillMount() {
    axios
      .get(`${process.env.APIURL}/place/${this.props.match.params._id}`)
      .then(res => {
        let data = res.data;
        console.log(this.props.match.params._id);
        this.setState({
          place: data,
          amenities: res.data.amenities
        });
      }, console.log(this.state.place.amenities))
      .catch(err => {});
    // axios
    //   .get("https://airbnb-api-emiliano.herokuapp.com/reviews")
    //   .then(res => {
    //     this.setState({
    //       review: res.data
    //     });
    //   })
    //   .catch(err => {});
  }

  render() {
    return (
      <div>
        <Nav />
        <Gallery images={this.state.place.images} />
        <div className="grid medium">
          <div className="grid sidebar-right">
            <div className="content">
              <h1>{this.state.place.title}</h1>
              <small>
                <i className="fas fa-map-marker-alt" />
                <span>
                  {this.state.place.city}, {this.state.place.country}
                </span>
              </small>
              <div className="user">
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url(${this.state.place.host.avatar})`
                  }}
                />
                <div className="name">
                  <small>Hosted by</small>
                  <span>{this.state.place.host.name}</span>
                </div>
              </div>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    <li>
                      <i className="fas fa-fw fa-home" />
                      {this.state.place.type.name}
                    </li>
                    <li>
                      <i className="fas fa-fw fa-user-friends" />
                      {this.state.place.guests}
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bed" />
                      {this.state.place.bedrooms} bedrooms
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bath" />
                      {this.state.place.bathrooms} baths
                    </li>
                  </ul>
                </div>
              </div>
              <p>{this.state.place.description}</p>
              <h3>Amenities</h3>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    {this.state.place.amenities.map(r => {
                      return (
                        <li>
                          {r.name}

                          <i className={`fas fa-${r.icon}`} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="reviews">
                <h2>
                  {this.state.place.reviews.length}{" "}
                  {this.state.place.reviews.length === 1 ? "Review" : "Reviews"}
                </h2>
                <form onSubmit={this.postReview}>
                  <div className="group">
                    <label>Leave a review</label>
                    <textarea defaultValue={""} onChange={this.reviewTextAdd} />
                    <div className="rating">
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <button className="primary small">Submit</button>
                  </div>
                </form>
                <div>
                  {this.state.place.reviews.map(r => {
                    return <Review p={r} />;
                  })}
                </div>
              </div>
            </div>
            <div className="sidebar booking">
              <div className="card shadow">
                <div className="content large">
                  <h3>
                    ${this.state.place.price}
                    <small>per night</small>
                  </h3>
                  <small>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span>{this.state.place.reviews.length} Reviews</span>
                  </small>
                  <form className="small">
                    <div className="group">
                      <label>Dates</label>
                      <DatePicker
                        selected={this.state.bookingStartDate}
                        onChange={this.handleChange}
                      />
                      <DatePicker
                        selected={this.state.bookingFinishDate}
                        onChange={this.handleChange2}
                      />
                    </div>
                    <div className="group">
                      <label>Guests</label>
                      <select>
                        <option>1 guest</option>
                        <option>2 guests</option>
                        <option>3 guests</option>
                        <option>4 guests</option>
                        <option>5 guests</option>
                        <option>6 guests</option>
                        <option>7 guests</option>
                        <option>8 guests</option>
                        <option>9 guests</option>
                        <option>10 guests</option>
                      </select>
                    </div>
                    <div className="group">
                      <button className="secondary full">
                        Book this place
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Place;
