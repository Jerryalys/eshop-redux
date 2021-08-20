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
      <CardImg top src={image}  alt="..."/>
        <CardBody>
          <CardTitle className='d-inline align-middle text-danger'>{product.title}</CardTitle>
          <CardTitle className='d-inline align-middle float-right h5'><strong>{product.price}</strong></CardTitle>
          <CardText className='my-2'>{product.description}</CardText>
          <Button color="secondary">Add to Cart</Button>
        </CardBody>
      </Card>
  </Col>
  );
}

export default ProductCard;