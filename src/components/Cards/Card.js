import React from "react";
import { ThemeConsumer } from "styled-components";

import wish from "../../assets/images/heart.png";
import "./Card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { item } = this.props;
    return (
      <div className="card">
        <div className="card-img">
          <img src={item.imgsrc} alt="book" width="200vw" height="200vh" />
        </div>

        <div className="card-content">
        <img src={wish} alt="wishlist" className = "wishlist" onClick={this.props.addwishlist()}/>
          <span className="title">{item.title}</span>
          
          <div>{item.price}</div>
          {item.audioprice ? (
            <React.Fragment>
              <h5>Audiobook: {item.audioprice}</h5>
            </React.Fragment>
          ) : null}
         
        </div>
      </div>
    );
  }
}

export default Card;
