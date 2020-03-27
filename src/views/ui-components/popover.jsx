import React, { useState } from 'react';
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

const PopoverItem = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <span>
            <Button className="mr-1" color="secondary" id={`Popover-${props.id}`} onClick={toggle.bind(null)}>
                {props.item.text}
            </Button>
            <Popover placement={props.item.placement} isOpen={popoverOpen} target={`Popover-${props.id}`} toggle={toggle.bind(null)}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
            </Popover>
        </span>
    );
}

const PopoverComponent = () => {
    const popovers = [
        {
            'placement': 'top',
            'text': 'Top'
        },
        {
            'placement': 'bottom',
            'text': 'Bottom'
        },
        {
            'placement': 'left',
            'text': 'Left'
        },
        {
            'placement': 'right',
            'text': 'Right'
        }
    ];

    return (
        <div>
            <Row>
                <Col xs="12" md="12">
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-priority-high mr-2"> </i>
                Popovers
                </CardTitle>
                        <CardBody>
                            {popovers.map((popover, i) => <PopoverItem key={i} item={popover} id={i} />)}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default PopoverComponent;
