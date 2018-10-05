import React from 'react';
import {
    Button, 
    Popover, 
    PopoverHeader,
    PopoverBody,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

class PopoverComponent extends React.Component {

    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        popoverOpen: false
      };

      this.state = {
        popovers: [
          {
            placement: 'top',
            text: 'Top'
          },
          {
            placement: 'bottom',
            text: 'Bottom'
          },
          {
            placement: 'left',
            text: 'Left'
          },
          {
            placement: 'right',
            text: 'Right'
          }
        ]
      };
    }

    toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }

    render() {

      //<span>
        //<Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
          //{this.props.item.text}
        //</Button>
        //<Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
          //<PopoverHeader>Popover Title</PopoverHeader>
          //<PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        //</Popover>
      //</span>

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
                        <CardTitle className="mb-0"><i className = "mdi mdi-priority-high mr-2"> </i>Popovers</CardTitle>
                      </CardBody>
                      <CardBody className="border-top">
                        <Button id="Popover1" onClick={this.toggle}>
                          Launch Popover
                        </Button>
                        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                          <PopoverHeader>Popover Title</PopoverHeader>
                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                        </Popover>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" md="6">
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-0"><i className = "mdi mdi-priority-high mr-2"> </i>Popovers List</CardTitle>
                      </CardBody>
                      <CardBody className="border-top">
                        <div>
                          {/*{ this.state.popovers.map((popover, i) => {
                            //return <PopoverItem key={i} item={popover} id={i} />;
                          })}*/}
                        </div>
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

export default PopoverComponent;


