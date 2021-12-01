import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Tooltip,
    Button
} from 'reactstrap';

const TooltipItem = props => {
    const { item, id } = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <span>
            <Button className="mr-1" color="secondary" id={"Tooltip-" + id}>
                {item.text}
            </Button>
            <Tooltip
                placement={item.placement}
                isOpen={tooltipOpen}
                target={"Tooltip-" + id}
                toggle={toggle}
            >
                Tooltip Content!
      </Tooltip>
        </span>
    );
};

const TooltipComponent = () => {

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-image-filter-vintage mr-2"> </i>
                    Tooltip
                </CardTitle>
                <CardBody className="">
                    <>
                        {[
                            {
                                placement: "top",
                                text: "Top"
                            },
                            {
                                placement: "bottom",
                                text: "Bottom"
                            },
                            {
                                placement: "left",
                                text: "Left"
                            },
                            {
                                placement: "right",
                                text: "Right"
                            }
                        ].map((tooltip, i) => {
                            return <TooltipItem key={i} item={tooltip} id={i} />;
                        })}
                    </>
                </CardBody>
            </Card>
            {/* -------------------------------------------------------------------------------- */}
            {/* Row */}
            {/* -------------------------------------------------------------------------------- */}
        </div>
    );
}

export default TooltipComponent;
