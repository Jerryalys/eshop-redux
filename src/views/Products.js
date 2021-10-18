import React, { Component } from "react"
import { connect } from "react-redux";
import { Card, CardBody, CardHeader, CardTitle, Row, Col } from "reactstrap"
import PanelHeader from "components/PanelHeader/PanelHeader.js"
import { addCart } from "../redux/actions";


class Products extends Component {
  render () {
    const cart = this.props.cart
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
                      <th scope="col"><strong>Price Total</strong></th>
                    </tr>
                  </thead>
                    <tbody>
                      {cart.length > 0 && cart.map((cart, index) => (             
                      <tr key={cart.id}>
                    <th scope="row">{index}</th>
                    <td>{cart.title}</td>
                    <td>{cart.code}</td>
                    <td>{cart.quantity}</td>
                    <td>{cart.price}</td>
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
        addCart: (product) => {dispatch(addCart(product))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
