import React from "react";
import {Component} from "react";
import ProductList from "components/ProductList/ProductList.js";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import shirts from "variables/shirts.js";
import shirts1 from "../assets/img/shirts/shirts1.jpg";


class Shirts extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    }
  }

addtoCart = (product) => {
  const newCart = [...this.state.cart]
  newCart.push(product)
  this.setState({cart: newCart})
}



render () {
  console.log(this.state.cart)
  return (
    <>
      <PanelHeader size="sm" />
      <ProductList 
        addtoCart={this.addtoCart}
        products={shirts}
        image={shirts1}
        header='Shirts for Men'
        description='Shirts For Men Cater to Men 
        Who Make Concerted Wardrobe Choices. 
        Comprising Denim, Linen, Striped and Floral.'
      />
    </>
    );
  }
}

export default Shirts;
