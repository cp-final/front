import React from 'react';
import cn from "classnames";
import s from "./BurgerButton.module.css";


const BurgerButton = ({isOn, handleToggle}) => {
  return (
      <div className={cn(s.wrapper, {[s.on]: isOn})} onClick={handleToggle}>
          <div> </div>
          <div> </div>
          <div> </div>
      </div>
  )
};

export default BurgerButton;