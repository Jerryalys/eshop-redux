import React, { Component } from "react"
import { Card, CardBody, CardHeader, CardTitle, Row, Col } from "reactstrap"
import PanelHeader from "components/PanelHeader/PanelHeader.js"
import { connect } from "react-redux";
import { removeCart} from "../redux/actions";


class Cart extends Component {
   removeFromCart = (product) => {
    const cartProducts = this.props.cart 
    const updatedCartProducts = cartProducts.filter(item => item.id !== product.id);
  
  }
  
  render () {
    const cartProducts = this.props.cart
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Products List</CardTitle>
                </CardHeader>
                <CardBody>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col"><strong>#</strong></th>
                      <th scope="col"><strong>Name</strong></th>
                      <th scope="col"><strong>Code Item</strong></th>
                      <th scope="col"><strong>Quantity</strong></th>
                      <th scope="col"><strong>Price</strong></th>
                      <th scope="col"><strong>Sub Total</strong></th>
                    </tr>
                  </thead>
                    <tbody>
                      {cartProducts.map((cartProduct, index) => (             
                      <tr key={cartProduct.id}>
                    <th scope="row">{index +1}</th>
                    <td>{cartProduct.title}</td>
                    <td>{cartProduct.code}</td>
                    <td>{cartProduct.quantity}</td>
                    <td>${cartProduct.price}</td>
                    <td>${cartProduct.price * cartProduct.quantity}</td>
                    <td><button onClick ={() => this.props.removeCart(cartProduct)} 
                        className="btn btn-danger cart-button px-4">Remove
                        </button>
                    </td>
                      </tr>))}
                    </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    )
  }
}


const mapStateToProps = (state)=> {
  return {
      cart: state.cart
       }
  }

const mapDispatchToProps = (dispatch) => { 
      return {
        removeCart: (product) => {dispatch(removeCart(product))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);