import React, { Component } from "react";
import { connect } from 'react-redux';
import ProductList from "components/ProductList/ProductList.js";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import sweatshirts from "variables/sweatshirts.js";
import sweatshirts1 from "../assets/img/sweatshirts/sweatshirts1.jpg";
import { addCart } from "../redux/actions";


class Sweatshirts extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    }
}

render () {
    return (
      <>
        <PanelHeader size="sm" />
        <ProductList 
          addToCart= {this.props.addCart}
          products={sweatshirts}
          image={sweatshirts1}
          header='Sweatshirts For Men'
          description='Sweatshirts for Men Take on Dual Duty. 
          An Activewear Staple, They Make the Cut in a Sports 
          and Casual Context. From White to Black, Oversized 
          to Short-Sleeved'
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


export default connect(mapStateToProps,mapDispatchToProps)(Sweatshirts);