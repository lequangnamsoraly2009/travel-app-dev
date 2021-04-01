import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

Button.propTypes = {
  children: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  buttonStyle: PropTypes.func,
  buttonSize: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  type: "",
  onClick: null,
  buttonStyle: null,
  buttonSize: null,
};

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

function Button(props) {
  const { children, type, onClick, buttonStyle, buttonSize } = props;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
    </>
  );
}

export default Button;

// import React from 'react';
// import './Button.scss';
// import { Link } from 'react-router-dom';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

// const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     <Link to='/sign-up' className='btn-mobile'>
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick}
//         type={type}
//       >
//         {children}
//       </button>
//     </Link>
//   );
// };