import React from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

class Buttons extends React.Component {

    // For Checkboxes & Radio Buttons
    constructor (props) {
      super(props);

      this.state = { cSelected: [] };

      this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
      this.setState({ rSelected });
    }

    onCheckboxBtnClick(selected) {
      const index = this.state.cSelected.indexOf(selected);
      if (index < 0) {
        this.state.cSelected.push(selected);
      } else {
        this.state.cSelected.splice(index, 1);
      }
      this.setState({ cSelected: [...this.state.cSelected] });
    }
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
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0">
                          <i className = "mdi mdi-toggle-switch mr-2"> </i>Buttons 
                        </CardTitle> 
                      </CardBody>
                      <CardBody className="border-top">
                        <div className="button-group">
                          <Button className="btn" color="primary">primary</Button>{' '}
                          <Button className="btn" color="secondary">secondary</Button>{' '}
                          <Button className="btn" color="success">success</Button>{' '}
                          <Button className="btn" color="info">info</Button>{' '}
                          <Button className="btn" color="warning">warning</Button>{' '}
                          <Button className="btn" color="danger">danger</Button>{' '}
                          <Button className="btn" color="link">link</Button>{' '}
                        </div>
                      </CardBody> 
                    </Card> 
                  </Col>
                  <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-2*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0">
                          <i className = "mdi mdi-toggle-switch mr-2"> </i>Outline Buttons
                        </CardTitle> 
                      </CardBody>
                      <CardBody className="border-top">
                        <div className="button-group">
                          <Button className="btn" outline color="primary">primary</Button>{' '}
                          <Button className="btn" outline color="secondary">secondary</Button>{' '}
                          <Button className="btn" outline color="success">success</Button>{' '}
                          <Button className="btn" outline color="info">info</Button>{' '}
                          <Button className="btn" outline color="warning">warning</Button>{' '}
                          <Button className="btn" outline color="danger">danger</Button>{' '}
                        </div>
                      </CardBody> 
                    </Card> 
                  </Col>
                  <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-3*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0">
                          <i className = "mdi mdi-toggle-switch mr-2"> </i>Large Size Buttons
                        </CardTitle> 
                      </CardBody>
                      <CardBody className="border-top">
                        <div className="button-group">
                          <Button className="btn" color="primary" size="lg">Large Button</Button>{' '}
                          <Button className="btn" color="secondary" size="lg">Large Button</Button>
                        </div>
                      </CardBody> 
                    </Card> 
                  </Col>
                  <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-4*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0">
                          <i className = "mdi mdi-toggle-switch mr-2"> </i>Small Size Buttons
                        </CardTitle> 
                      </CardBody>
                      <CardBody className="border-top">
                        <div className="button-group">
                          <Button className="btn" color="primary" size="sm">Small Button</Button>{' '}
                          <Button className="btn" color="secondary" size="sm">Small Button</Button>
                        </div>
                      </CardBody> 
                    </Card> 
                  </Col>
                  <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-6*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0">
                          <i className = "mdi mdi-toggle-switch mr-2"> </i>Active State Buttons
                        </CardTitle> 
                      </CardBody>
                      <CardBody className="border-top">
                        <div className="button-group">
                          <Button className="btn" color="primary" size="lg" active>Primary link</Button>{' '}
                          <Button className="btn" color="secondary" size="lg" active>Link</Button>
                        </div>
                      </CardBody> 
                    </Card> 
                  </Col>
                  <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-7*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0">
                          <i className = "mdi mdi-toggle-switch mr-2"> </i>Disabled State Buttons
                        </CardTitle> 
                      </CardBody>
                      <CardBody className="border-top">
                        <div className="button-group">
                          <Button className="btn" color="primary" size="lg" disabled>Primary button</Button>{' '}
                          <Button className="btn" color="secondary" size="lg" disabled>Button</Button>
                        </div>
                      </CardBody> 
                    </Card> 
                  </Col>
                  <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-5*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0">
                          <i className = "mdi mdi-toggle-switch mr-2"> </i>Block Buttons
                        </CardTitle> 
                      </CardBody>
                      <CardBody className="border-top">
                        <div className="button-group">
                          <Button className="btn" color="primary" size="lg" block>Block level button</Button>{' '}
                          <Button className="btn" color="secondary" size="lg" block>Block level button</Button>
                        </div>
                      </CardBody> 
                    </Card> 
                  </Col>
                  <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-6*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0">
                          <i className = "mdi mdi-toggle-switch mr-2"> </i>Checkbox(Stateful Buttons)
                        </CardTitle> 
                      </CardBody>
                      <CardBody className="border-top">
                        <h5>Checkbox Buttons</h5>
                        <ButtonGroup>
                          <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                          <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                          <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
                        </ButtonGroup>
                        <p className="mb-0">Selected: {JSON.stringify(this.state.cSelected)}</p>
                      </CardBody> 
                    </Card> 
                  </Col>
                  <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-6*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0">
                          <i className = "mdi mdi-toggle-switch mr-2"> </i>Radio Buttons (Stateful Buttons)
                        </CardTitle> 
                      </CardBody>
                      <CardBody className="border-top">
                        <h5>Radio Buttons</h5>
                        <ButtonGroup>
                          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
                          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
                          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
                        </ButtonGroup>
                        <p className="mb-0">Selected: {this.state.rSelected}</p>
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

export default Buttons;


