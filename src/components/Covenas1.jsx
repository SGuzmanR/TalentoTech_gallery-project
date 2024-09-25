import covenas1 from '../assets/img/covenas1.jpg'
import PropTypes from 'prop-types';


const Covenas1 = ({ props }) => {
  return (
    <img alt="Paisaje de Conveñas, Sucre" src={covenas1} className={props.className} />
  )
}

Covenas1.propTypes = {
  className: PropTypes.string,
}

export default Covenas1