import React from "react";

import Card from "../components/Cards/Card";
import "./Styles.scss";

const items = [
  {
    imgsrc:
      "https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY436_FMwebp_QL65_.jpg",
    title: "World’s Greatest Classics",
    price: "Rs.400/-",
  },
  {
    imgsrc:
      "https://m.media-amazon.com/images/I/71UfMw0tKLS._AC_UY436_FMwebp_QL65_.jpg",
    title: "Think & Grow Rich",
    price: "Rs.100/-",
    audioprice: "200/-",
  },
];

class Passprops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: 0,
    };
  }
  addWishList = () => {
    let { wishlist } = this.state;
    wishlist = wishlist + 1;
    this.setState({ wishlist });
  };
  render() {
    return (
      <div id="passProps">
        <div className="leftBar">Wishlist: {this.state.wishlist}</div>
        <div className="shoppingItems">
          <Card item={items[0]} addwishlist={() => this.addWishList} />
          <Card item={items[1]} addwishlist={() => this.addWishList} />
        </div>
      </div>
    );
  }
}

export default Passprops;
