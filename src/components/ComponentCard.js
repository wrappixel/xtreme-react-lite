import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';

const ComponentCard = ({ children, title, subtitle }) => {
  return (
    <Card>
      <CardTitle tag="h4" className="border-bottom px-4 py-3 mb-0">
        {title}
      </CardTitle>
      <CardBody className="p-4">
        <CardSubtitle className="text-muted mb-3">{subtitle || ''}</CardSubtitle>
        <div>{children}</div>
      </CardBody>
    </Card>
  );
};

ComponentCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.node
};

export default ComponentCard;
