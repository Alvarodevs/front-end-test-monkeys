import React from 'react'
import PropTypes from 'prop-types'
import buttonStyles from "./button.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronRight, faChevronLeft, faSortAmountDown} from '@fortawesome/free-solid-svg-icons';

export const Button = (props) => {

   const iconSwitch = (iconType) => {
      if (iconType === "faSliders") {
         return faSliders
      } else if (iconType === "faBarsSort") {
         return faSortAmountDown
      } else if (iconType === "next") {
         return faChevronRight
      } else return faChevronLeft
   }
   
   return (
      <div>
         <div className={buttonStyles.container}>
            <FontAwesomeIcon icon={iconSwitch(props.iconType)} className={buttonStyles.icon} />
            <p>{props.iconType === "faSliders" || props.iconType === "faBarsSort" ? props.title : ""}</p>
         </div>
      </div>
   )
}

Button.propTypes = {
   title: PropTypes.string,
   iconType: PropTypes.string
}