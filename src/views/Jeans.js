/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, CardImg, CardTitle, CardText, Button } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import jeans1 from "../assets/img/jeans/jeans1.jpg"
import jeans from "variables/jeans"


function Jeans() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Jeans For Men</h5>
                <p className="category">
                Men's Jeans Form The Foundation Of Contemporary Wardrobes. Whether Tailored Or Super Skinny, Straight or Slim, Biker or Destroyed, Our Denim Collection Caters To Every Style And Silhouette. High-Waisted And Low-Rise Designs, as well as Tapered Cuts Cater To Specific Tastes, While Washes Range From Black And Classic Indigo to White and Colourful. To Strike a Modern Everyday Note, Team Your Chosen Pair With a White T-Shirt and a Blazer; A Statement Shirt And Leather Jacket; or a Chunky Hooded Sweatshirt and Sneakers.
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  {jeans.map((jean, key) => {
                    return (
                      <Col
                        lg={4}
                        md={6}
                        sm={6}
                        xs={12}
                        className="font-icon-list"
                        key={key}
                      ><Card>
                      <CardImg top src={jeans1} alt="..."/>
                      <CardBody>
                         <CardTitle className='d-inline align-middle text-danger'>{jean.title}</CardTitle>
                         <CardTitle className='d-inline align-middle float-right h5'><strong>{jean.price}</strong></CardTitle>
                         <CardText className=''>{jean.description}</CardText>
                         <Button color="secondary">Add to Cart</Button>
                      </CardBody>
                      </Card>
                        {/* <div className="font-icon-detail">
                          <i className={"now-ui-icons " + prop} />
                          <p>{prop}</p>
                        </div> */}
                      </Col>
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

export default Jeans;
