import React from 'react';
import {
    Container,
    Col,
    Row,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

class LayoutComponent extends React.Component {

    render() {
      return <div>
              {/*--------------------------------------------------------------------------------*/}
              {/*Start Inner Div*/}
              {/*--------------------------------------------------------------------------------*/}
                {/*--------------------------------------------------------------------------------*/}
                {/*Row*/}
                {/*--------------------------------------------------------------------------------*/}
                <Card>
                  <CardBody>
                    <CardTitle className="mb-0"><i className = "mdi mdi-apps mr-2"> </i>Grid Layout</CardTitle>
                  </CardBody>
                  <CardBody className="border-top">
                    <Container>
                      <Row>
                        <Col>
                          <div className="bg-light p-2 border">
                            .col
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col>
                          <div className="bg-light p-2 border">
                            .col
                          </div>
                        </Col>
                        <Col>
                          <div className="bg-light p-2 border">
                          .col
                          </div>
                        </Col>
                        <Col>
                          <div className="bg-light p-2 border">
                          .col
                          </div>
                        </Col>
                        <Col>
                          <div className="bg-light p-2 border">
                          .col
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col xs="3">
                          <div className="bg-light p-2 border">
                          .col-3
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="bg-light p-2 border">
                          .col-auto - variable width content
                          </div>
                        </Col>
                        <Col xs="3">
                          <div className="bg-light p-2 border">
                          .col-3
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col xs="6">
                          <div className="bg-light p-2 border">
                          .col-6
                          </div>
                        </Col>
                        <Col xs="6">
                          <div className="bg-light p-2 border">
                          .col-6
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col xs="6" sm="4">
                          <div className="bg-light p-2 border">
                            .col-6 .col-sm-4
                            </div>
                        </Col>
                        <Col xs="6" sm="4">
                          <div className="bg-light p-2 border">
                            .col-6 .col-sm-4
                            </div>
                        </Col>
                        <Col sm="4">
                          <div className="bg-light p-2 border">
                            .col-sm-4
                            </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col sm={{ size: 6, order: 2, offset: 1 }}>
                          <div className="bg-light p-2 border">
                            .col-sm-6 .col-sm-order-2 .col-sm-offset-2
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                          <div className="bg-light p-2 border">
                            .col-sm-12 .col-md-6 .col-md-offset-3
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col sm={{ size: 'auto', offset: 1 }}>
                          <div className="bg-light p-2 border">
                            .col-sm .col-sm-offset-1
                          </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                          <div className="bg-light p-2 border">
                            .col-sm .col-sm-offset-1
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                </Card>
                {/*--------------------------------------------------------------------------------*/}
                {/*Row*/}
                {/*--------------------------------------------------------------------------------*/}
              
              {/*--------------------------------------------------------------------------------*/}
              {/*End Inner Div*/}
              {/*--------------------------------------------------------------------------------*/}
            </div>
    }
}

export default LayoutComponent;


