import React from "react";
import { Card, CardHeader, CardBody, Row, Col, CardImg, CardTitle, CardText, Button } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import shirts from "variables/shirts.js";
import ProductCard from "components/ProductCard/ProductCard.js"
import shirt1 from "../assets/img/shirts/shirts1.jpg";

function Shirts () {
  return (
    <>
    <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Shirts for Men</h5>
                <p className="category">
                  From Casual to Formal, 
                  Elaborate to Pared Back, 
                  Our Shirts For Men Cater to Men 
                  Who Make Concerted Wardrobe Choices. 
                  Comprising Denim, Linen, Striped and Floral, 
                  to Name a Few, the Collection Delivers 
                  Timeless All-Season Designs to Fill 
                  The Gaps in Your Repertoire.
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  {shirts.map((shirt, key ) => {
                    return (
                      <ProductCard 
                        key={key} 
                        product={shirt}
                        image={shirt1}
                      />
                    );
                  })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Shirts;
