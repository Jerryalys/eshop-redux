import React from "react";
import { Card, CardHeader, CardBody, Row, Col, CardImg, CardTitle, CardText, Button } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import shirts1 from "../assets/img/shirts/shirts1.jpg"
import shirts from "variables/shirts";

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
                  {shirts.map((shirt, key) => {
                    return (
                      <Col
                        lg={4}
                        md={6}
                        sm={6}
                        xs={12}
                        className="font-icon-list"
                        key={key}
                      ><Card>
                      <CardImg top src={shirts1} alt="..."/>
                      <CardBody>
                          <CardTitle className='d-inline align-middle text-danger '>{shirt.title}</CardTitle>
                          <CardTitle className='d-inline align-middle float-right h5'><strong>{shirt.price}</strong></CardTitle>
                          <CardText>{shirt.description}</CardText>
                          <Button color="primary">Add to Cart</Button>
                      </CardBody>
                      </Card>
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

export default Shirts;
