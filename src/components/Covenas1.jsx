import covenas1 from '../assets/img/covenas1.jpg'
import PropTypes from 'prop-types';

export const Covenas1 = ({ className }) => {
  return (
    <img alt="Paisaje de Conveñas, Sucre" src={covenas1} className={className} />
  )
}

Covenas1.propTypes = {
  className: PropTypes.string,
};