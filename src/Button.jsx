import PropTypes from "prop-types";
import './Button.css'
const Button = ({ keys ,handleClick}) => {
  return (
    <div className="button-container">
      {keys.map((key,ind) => (
        <div key={ind} onClick={handleClick}>{key}</div>
      ))}
    </div>
  );
};
Button.propTypes = {
  keys: PropTypes.array.isRequired,
  handleClick:PropTypes.func,
};
export default Button;
