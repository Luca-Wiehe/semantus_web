import React, {useState} from 'react';


import '../styles/style.css'
import '../styles/components/Button.css';

/**
 * A button component that is in accordance with Semantus styling scheme.
 * @param {string} appearance - The appearance of the button. Valid options are 'primary', 'secondary', and 'tertiary'.
 * @param {number} width - The width of the button in pixels.
 * @param {number} height - The height of the button in pixels.
 * @param {function} onClick - The click handler for the button.
 */
const Button = (props) => {
   const { appearance, width, height, onClick } = props;
   const bgColor = appearance === 'primary' ? 'var(--color_tertiary)' : (appearance === 'secondary' ? 'var(--color_primary)' : 'var(--color_secondary)');
   const borderStyle = appearance === 'primary' ? '1px solid var(--color_tertiary)' : '1px solid var(--color_primary)';
   const textColor = appearance === 'secondary' ? 'var(--color_secondary)' : 'var(--color_primary)';

   const [style, setStyle] = useState({
      width: width,
      height: height,
      backgroundColor: bgColor,
      border: borderStyle,
      color: textColor
   });

   const handleMouseEnter = () => {
      setStyle({
         ...style, 
         backgroundColor: appearance === 'tertiary' ? 'var(--color_primary)' : 'var(--color_secondary)',
         color: appearance === 'tertiary' ? 'var(--color_secondary)' : 'var(--color_primary)',
      })
   }

   const handleMouseLeave = () => {
      setStyle({
         ...style, 
         backgroundColor: bgColor,
         color: textColor
      })
   }

   return (
      <button className="btn" style={style} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
         {props.children}
      </button>
   );
}

export default Button;