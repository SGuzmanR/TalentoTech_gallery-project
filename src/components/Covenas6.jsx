import covenas6 from '../assets/img/covenas6.jpg'
import PropTypes from 'prop-types';

export const Covenas6 = ({ className }) => {
  return (
    <img alt="Paisaje de Conveñas, Sucre" src={covenas6} className={className} />
  )
}

Covenas6.propTypes = {
  className: PropTypes.string,
};