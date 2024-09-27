import covenas5 from '../assets/img/covenas5.jpg'
import PropTypes from 'prop-types';

export const Covenas5 = ({ className }) => {
  return (
    <img alt="Paisaje de Conveñas, Sucre" src={covenas5} className={className} />
  )
}

Covenas5.propTypes = {
  className: PropTypes.string,
};