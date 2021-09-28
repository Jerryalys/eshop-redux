import React from "react";

import ProductList from "components/ProductList/ProductList.js";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import shirts from "variables/shirts.js";
import shirts1 from "../assets/img/shirts/shirts1.jpg";

function Shirts () {
  return (
    <>
      <PanelHeader size="sm" />
      <ProductList 
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

export default Shirts;
