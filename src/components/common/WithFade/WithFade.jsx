import React from 'react';
import {CSSTransition} from "react-transition-group";

const WithFade = ({isIn, children}) => {
    return (
        <CSSTransition
            in={isIn}
            timeout={200}
            classNames="page"
            unmountOnExit
        >
            {children}
        </CSSTransition>
    )
};

export default WithFade;