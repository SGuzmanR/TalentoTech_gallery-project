import covenas4 from '../assets/img/covenas4.jpg'
import PropTypes from 'prop-types';

export const Covenas4 = ({ className }) => {
  return (
    <img alt="Paisaje de Conveñas, Sucre" src={covenas4} className={className} />
  )
}

Covenas4.propTypes = {
  className: PropTypes.string,
};