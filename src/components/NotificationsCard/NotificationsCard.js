import React from "react";
import { Card, CardTitle, CardBody, Row, Col, Button } from "reactstrap";


const NotificationsCard = ({button1, button2, button3, button4, button5, button6 }) => {
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
                      color={button1.color}
                      block
                      onClick={() => notify("tl")}
                    >
                     {button1.name}
                    </Button>
                      </Col>
                        <Col md={4} xs={12}>
                    <Button
                     color={button2.color}
                     block
                     onClick={() => notify("tc")}
                   >
                     {button2.name}
                    </Button>
                        </Col>
                          <Col md={4} xs={12}>
                    <Button
                     color={button3.color}
                     block
                     onClick={() => notify("tr")}
                    >
                     {button3.name}
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
                      color={button4.color}
                      block
                      onClick={() => notify("bl")}
                    >
                    {button4.name}
                    </Button>
                          </Col>
                          <Col md={4} xs={12}>
                    <Button
                      color={button5.color}
                      block
                      onClick={() => notify("bc")}
                    >
                    {button5.name}
                    </Button>
                          </Col>
                          <Col md={4} xs={12}>
                    <Button
                      color={button6.color}
                      block
                      onClick={() => notify("br")}
                    >
                      {button6.name}
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