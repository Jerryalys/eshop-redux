import React from "react";
import { Card, CardBody, CardTitle, CardImg, Col, CardText, Button } from 'reactstrap';


const ProductCard = ({ key, product, image }) => {
  return (
    <Col
      lg={4}
      md={6}
      sm={6}
      xs={12}
      className="font-icon-list"
      key={key}
    ><Card>
      <CardImg img src={image} alt="product"/>
        <CardBody>
          <CardTitle className='d-inline align-middle text-danger'>{product.title}</CardTitle>
          <CardTitle className='d-inline align-middle float-right h5'><strong>{product.price}</strong></CardTitle>
          <CardText className='my-2'>{product.description}</CardText>
          <Button>
            <div class="col-md-12 text-center">
              <div class="buttons d-flex flex-row">
                <div class="cart"><i class="fa fa-shopping-cart"></i>
                  </div> 
                <button class="btn btn-success cart-button px-5">Add to cart</button>
              </div>
            </div>
          </Button>
        </CardBody>
      </Card>
  </Col>
  );
}

export default ProductCard;