import React from 'react';
import {
    Pagination, 
    PaginationItem, 
    PaginationLink,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

class PaginationComponent extends React.Component {

    render() {
      return <div>
              {/*--------------------------------------------------------------------------------*/}
              {/*Start Inner Div*/}
              {/*--------------------------------------------------------------------------------*/}
                {/*--------------------------------------------------------------------------------*/}
                {/*Row*/}
                {/*--------------------------------------------------------------------------------*/}
                <Row>
                  <Col xs="12" md="6">
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0"><i className = "mdi mdi-priority-high mr-2"> </i>Pagination</CardTitle>
                      </CardBody>
                      <CardBody className="border-top">
                        <Pagination aria-label="Page navigation example">
                          <PaginationItem>
                            <PaginationLink previous href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              2
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              3
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              4
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              5
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink next href="#" />
                          </PaginationItem>
                        </Pagination>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" md="6">
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0"><i className = "mdi mdi-priority-high mr-2"> </i>Disabled and active states</CardTitle>
                      </CardBody>
                      <CardBody className="border-top">
                        <Pagination aria-label="Page navigation example">
                          <PaginationItem disabled>
                            <PaginationLink previous href="#" />
                          </PaginationItem>
                          <PaginationItem active>
                            <PaginationLink href="#">
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              2
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              3
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              4
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              5
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink next href="#" />
                          </PaginationItem>
                        </Pagination>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" md="6">
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0"><i className = "mdi mdi-priority-high mr-2"> </i>Sizing</CardTitle>
                      </CardBody>
                      <CardBody className="border-top">
                        <Pagination size="lg" aria-label="Page navigation example">
                          <PaginationItem>
                            <PaginationLink previous href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              2
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              3
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink next href="#" />
                          </PaginationItem>
                        </Pagination>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" md="6">
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0"><i className = "mdi mdi-priority-high mr-2"> </i>Sizing</CardTitle>
                      </CardBody>
                      <CardBody className="border-top">
                        <Pagination size="sm" aria-label="Page navigation example">
                          <PaginationItem>
                            <PaginationLink previous href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              2
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              3
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink next href="#" />
                          </PaginationItem>
                        </Pagination>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                {/*--------------------------------------------------------------------------------*/}
                {/*Row*/}
                {/*--------------------------------------------------------------------------------*/}
              
              {/*--------------------------------------------------------------------------------*/}
              {/*End Inner Div*/}
              {/*--------------------------------------------------------------------------------*/}
            </div>
    }
}

export default PaginationComponent;


