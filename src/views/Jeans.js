import React from "react";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ProductList from "components/ProductList/ProductList.js";
import jeans from "variables/jeans";
import jeans1 from "../assets/img/jeans/jeans1.jpg";
import {Component} from "react";


class Jeans extends Component {
  constructor() {
    super();

    this.state = {
      cartproducts: [
      { id: 1,
        title: 'Worker Jeans',
        description: 'Straight-Fit Faded Jeans With Patch Pockets on the Front and Back',
        price: '55$',
        image: '../assets/img/jeans/jeans1.jpg'
      },
      {
        id: 2,
        title: 'Topstiched Jeans',
        description: 'Relaxed Fit Trousers Featuring Front Pockets and Rear Patch Pocket',
        price: '60$',
        image: '../assets/img/jeans/jeans2.jpg',
      },
      {
        id: 3,
        title: 'Cropped Slim Fit Jeans',
        description: 'Faded Slim Fit Cropped with Five Pockets and Front Button Fastening',
        price: '50$',
        image: '../assets/img/jeans/jeans3.jpg',
      },
      {
        id: 4,
        title: 'Relaxed Fit Jeans',
        description: 'Five-Pocket Design, Contrast Topstiching and a Button-Up Front',
        price: '45$',
        image: '../assets/img/jeans/jeans4.jpg',
      },
      {
        id: 5,
        title: 'Relaxed Set Jeans',
        description: 'Side Pockets and Rear Patch Pocket. Front Zip and Button Fastening',
        price: '40$',
        image: '../assets/img/jeans/jeans5.jpg',
      }
    ]
  };
}




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