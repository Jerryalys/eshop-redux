import React, {Component} from "react";
import { connect } from 'react-redux';
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ProductList from "components/ProductList/ProductList.js";
import jeans1 from "../assets/img/jeans/jeans1.jpg";
import jeans from "variables/jeans";
import { addCart } from "../redux/actions";
import { removeCart} from "../redux/actions";



class Jeans extends Component {
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
          addToCart = {this.props.addCart}
          removeFromCart = {this.props.removeCart}
          products={jeans}
          image={jeans1}
          header='Jeans For Men'
          description='Foundation Of Contemporary Wardrobes, 
          Whether Tailored Or Super Skinny, Straight or Slim, 
          Biker or Destroyed, Our Denim Collection Caters To 
          Every Style And Silhouette.'
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
        addCart: (product) => {dispatch(addCart(product))},
        removeCart: (product) => {dispatch(removeCart(product))}
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jeans);