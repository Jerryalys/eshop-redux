import React from "react";
import { Card, CardTitle, CardBody, Row, Col, Button } from "reactstrap";



const NotificationsCard = () => {
  return (
    <Card>
     <CardBody>
      <div className="places-buttons">
       <Row>
        <Col md={6} className="ml-auto mr-auto text-center">
          <CardTitle tag="h4">
              Notifications Places
            <p className="category">Click to view items</p>
         </CardTitle>
        </Col>
          </Row>
            <Row>
              <Col lg={8} xs={12} className="ml-auto mr-auto">
                <Row>
                 <Col md={4} xs={12}>
                    <Button
                      color="primary"
                      block
                      onClick={() => notify("tl")}
                    >
                    Top Left
                    </Button>
                      </Col>
                        <Col md={4} xs={12}>
                    <Button
                     color="secondary"
                     block
                     onClick={() => notify("tc")}
                   >
                  Top Center
                    </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="success"
                            block
                            onClick={() => notify("tr")}
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} xs={12} className="ml-auto mr-auto">
                      <Row>
                        <Col md={4} xs={12}>
                          <Button
                            color="danger"
                            block
                            onClick={() => notify("bl")}
                          >
                            Bottom Left
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="warning"
                            block
                            onClick={() => notify("bc")}
                          >
                            Bottom Center
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="info"
                            block
                            onClick={() => notify("br")}
                          >
                            Bottom Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
             );
            }
export default NotificationsCard;