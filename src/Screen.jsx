import './Screen.css'
import PropTypes from 'prop-types';
const Screen = (props) =>{
    return(
        <div className = "screen-container">
            {props.input}
        </div>
    )
}

Screen.propTypes={
    input:PropTypes.string.isRequired,
}
export default Screen;