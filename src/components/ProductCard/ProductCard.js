import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardImg, Col, CardText, Button } from 'reactstrap'

class ProductCard extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    const {image, product, key, addtoCart} = this.props
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
              <div className="col-md-12 text-center">
                <div className="buttons d-flex flex-row">
                  <div className="cart"><i className="fa fa-shopping-cart"></i>
                    </div> 
                  <button onClick={() => addtoCart(product)} className="btn btn-success cart-button px-5">Add to Cart</button>
                </div>
              </div>
            </Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default ProductCard