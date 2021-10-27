import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import ProductCard from "components/ProductCard/ProductCard.js";


const ProductList = ({products, header, description, image, addToCart, removeFromCart}) => {
  return (
    <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">{header}</h5>
                <p className="category">{description}</p>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  {products.map((product, index) => {
                    return (
                      <ProductCard 
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        index={index} 
                        product={product} 
                        image={image}
                      />
                    );
                  })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>  
      );
    }
    
export default ProductList;