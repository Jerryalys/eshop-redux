import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Row, Col } from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader.js";

function RegularTables() {
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
                    <tr>
                      <th scope="row">1</th>
                      <td>Worker Jeans</td>
                      <td>155</td>
                      <td>1</td>
                      <td>55$</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Striped Stretch Shirt</td>
                      <td>235</td>
                      <td>2</td>
                      <td>70$</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Shirt With Pocket</td>
                      <td>240</td>
                      <td>3</td>
                      <td>120$</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Print Sweatshirt</td>
                      <td>340</td>
                      <td>1</td>
                      <td>40$</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Basic Hoodie</td>
                      <td>325</td>
                      <td>2</td>
                      <td>50$</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Cropped Slim Fit Jeans</td>
                      <td>150</td>
                      <td>1</td>
                      <td>50$</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Textured Weave Twill Shirt</td>
                      <td>230</td>
                      <td>2</td>
                      <td>60$</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Cotton Cardigan</td>
                      <td>345</td>
                      <td>1</td>
                      <td>45$</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Skinny Fit Jeans</td>
                      <td>135</td>
                      <td>2</td>
                      <td>70$</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Lyocell And Cotton Shirt</td>
                      <td>225</td>
                      <td>3</td>
                      <td>75$</td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RegularTables;
