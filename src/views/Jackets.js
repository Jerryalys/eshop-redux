import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ProductList from "components/ProductList/ProductList.js";
import jackets1 from "../assets/img/jackets/jackets1.jpg";
import jackets from "variables/jackets";
import { addCart } from "../redux/actions";
import { removeCart} from "../redux/actions";




export default function Jackets () {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = product => dispatch(addCart(product));
  const handleRemoveFromCart = product => dispatch(removeCart(product));

    return (
      <>
        <PanelHeader size="sm" />
        <ProductList 
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          products={jackets}
          image={jackets1}
          header='Jackets For Men'
          description='Men Jackets Cater To The Everyday 
          As Well As Special Bomber And Sports Jackets Are
          The Perfect Styles To Complete Casual Outfits. 
          While Tailored And Textured Styles. From Wind 
          Breakers To Biker Jackets.'
        />
      </>
    );
  }

