import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
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

class Gallery extends React.Component {
  state = {
    images: [],
    bigImage: this.props.images[0],
    index: 0
  };
  componentWillMount() {
    let images = this.props.images;
    console.log(this.props.images);
    this.setState({
      images: images
    });
    let bigImage = this.props.images;
    console.log(this.props.images[1]);
    this.setState({
      bigImage: bigImage
    });
  }
  //con questa funzione dico che quando clicca deve cambiare lindice della foto nell array da mostrare nell immagine grande
  changeMainImage = i => {
    console.log(i);
    let index = i;
    this.setState({
      index: index
    });
  };

  render() {
    return (
      <div className="gallery">
        <div
          className="image-main"
          style={{
            backgroundImage: `url(${this.props.images[this.state.index]})`
          }}
        >
          <button className="icon">
            <i className="far fa-heart" />
          </button>
        </div>

        <div className="thumbnails">
          {this.props.images.map((image, i) => (
            <div
              className="thumbnail"
              onClick={() => this.changeMainImage(i)}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
export default Gallery;
