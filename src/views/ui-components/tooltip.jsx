import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Tooltip,
    UncontrolledTooltip 
} from 'reactstrap';

class JumbotronComponent extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        tooltipOpen: false
      };
    }

    toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
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
                    <CardTitle className="mb-0"><i className = "mdi mdi-image-filter-vintage mr-2"> </i>Tooltip</CardTitle>
                  </CardBody>
                  <CardBody className="border-top">
                    <div>
                      <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">tooltip</span>.</p>
                      <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                        Hello world!
                      </Tooltip>
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-0"><i className = "mdi mdi-image-filter-vintage mr-2"> </i>Uncontrolled Tooltip</CardTitle>
                  </CardBody>
                  <CardBody className="border-top">
                    <div>
                      <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">tooltip</span>.</p>
                      <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                        Hello world!
                      </UncontrolledTooltip>
                    </div>
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

export default JumbotronComponent;


