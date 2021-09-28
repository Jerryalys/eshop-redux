import React from "react";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import {Component} from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      firstname:'',
      lastname:'',
      address: '',
      city: '',
      country: '',
      code: '',
      gender:'',
      addProfile: true
    };

    this.handlerChange = this.handlerChange.bind(this);

  }

  handlerChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    alert(`${name} ${value}`)

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.email} ${this.state.firstname}
           ${this.state.lastname} ${this.state.address} ${this.state.city} ${this.state.country}
           ${this.state.code}`)
           event.preventDefault ()
  }

  render(){
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Customer Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col className="px-4" md="12">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handlerChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-4" md="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email Address
                          </label>
                          <Input 
                            name="email"
                            type="email" 
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.handlerChange}
                        />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-4" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            name="firstname"
                            type="text"
                            placeholder="First Name"
                            value={this.state.firstname}
                            onChange={this.handlerChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-4" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                           name="lastname"
                           type="text"
                           placeholder="Last Name"
                           value={this.state.lastname}
                           onChange={this.handlerChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-4" md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            name="address"
                            type="text"
                            placeholder="Address"
                            value={this.state.address}
                            onChange={this.handlerChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-4" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            name="city"
                            type="text"
                            placeholder="City"
                            value={this.state.city}
                            onChange={this.handlerChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-4" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            name="country"
                            type="text"
                            placeholder="Country"
                            value={this.state.country}
                            onChange={this.handlerChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-4" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input
                          name="code"  
                          type="number"
                          placeholder="Postal Code"
                          value={this.state.code}
                          onChange={this.handlerChange}
                           />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>
                            <button type="submit" 
                                    className="btn btn-light btn-rounded"
                                    >Submit
                            </button>
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                      <FormGroup>
                        <label>
                          <input 
                          type="radio" 
                          value="male" 
                          name="gender"
                          onChange={this.handlerChange}
                          /> Male
                        </label>
                        <label>
                          <input 
                          type="radio" 
                          value="female" 
                          name="gender" 
                          onChange={this.handlerChange}
                          /> Female
                        </label>
                        <label>
                          <input 
                          type="radio" 
                          value="other" 
                          name="gender" 
                          onChange={this.handlerChange}
                          /> Other
                        </label>
                      </FormGroup>
                      <FormGroup>
                        <label>
                          Add Profile:
                          <input
                            name="addProfile"
                            type="checkbox"
                            checked={this.state.addProfile}
                            onChange={this.handlerChange} />
                        </label>
                      </FormGroup>
                      <FormGroup>
                        <label>
                          Choose Shipping Country:
                          <select value={this.state.value} onChange={this.handlerChange}>
                            <option value="greece">Greece</option>
                            <option value="usa">USA</option>
                            <option value="england">England</option>
                            <option value="france">France</option>
                          </select>
                        </label>
                      </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require("assets/img/bg5.jpg").default} />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg").default}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">michael24</p>
                  </div>
                  <p className="description text-center">
                    "Lamborghini Mercy <br />
                    Your chick she so thirsty <br />
                    I'm in that two seat Lambo"
                  </p>
                </CardBody>
                <hr />
                <div className="button-container">
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-facebook-f" />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-google-plus-g" />
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default User;
