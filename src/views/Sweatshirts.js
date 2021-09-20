import React from "react";

import ProductList from "components/ProductList/ProductList.js";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import sweatshirts from "variables/sweatshirts.js";
import sweatshirts1 from "../assets/img/sweatshirts/sweatshirts1.jpg";

function Sweatshirts () {
  return (
    <>
      <PanelHeader size="sm" />
      <ProductList 
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

export default Sweatshirts;