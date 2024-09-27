import covenas3 from '../assets/img/covenas3_2.jpg'
import PropTypes from 'prop-types';

export const Covenas3 = ({ className }) => {
  return (
    <img alt="Paisaje de Conveñas, Sucre" src={covenas3} className={className} />
  )
}

Covenas3.propTypes = {
  className: PropTypes.string,
};