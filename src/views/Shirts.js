import React, { Component } from "react";
import { connect } from 'react-redux';
import ProductList from "components/ProductList/ProductList.js";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import shirts from "variables/shirts.js";
import shirts1 from "../assets/img/shirts/shirts1.jpg";
import { addCart } from "../redux/actions";


class Shirts extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    }
}

  render () {
    console.log("cart: ", this.props.cart);
  return (
    <>
      <PanelHeader size="sm" />
      <ProductList 
        addToCart={this.props.addCart}
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

  const mapStateToProps = (state)=> {
    return {
        cart: state.cart
         }
    }
  
  const mapDispatchToProps = (dispatch) => {
        return {
          addCart: (product) => {dispatch(addCart(product))}
      }
  }

  
export default connect(mapStateToProps,mapDispatchToProps)(Shirts);


