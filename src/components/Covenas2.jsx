import covenas2 from '../assets/img/covenas2.jpg'
import PropTypes from 'prop-types';

export const Covenas2 = ({ className }) => {
  return (
    <img alt="Paisaje de Conveñas, Sucre" src={covenas2} className={className} />
  )
}

Covenas2.propTypes = {
  className: PropTypes.string,
};