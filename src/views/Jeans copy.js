import React from "react";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ProductList from "components/ProductList/ProductList.js";
import jeans from "variables/jeans";
import jeans1 from "../assets/img/jeans/jeans1.jpg";
import {Component} from "react";


class Jeans extends Component {
  render () {
    return (
    <>
      <PanelHeader size="sm" />
      <ProductList 
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
export default Jeans;