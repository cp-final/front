import React from 'react';
import {CSSTransition} from "react-transition-group";
import Preloader from "./Preloader/Preloader";

const WithPreloader = (props) => {
    return (
        <>
            <CSSTransition in={props.in}
                           classNames={props.classNames}
                           unmountOnExit
                           timeout={300}
                           key={1}
            >
                <div className={props.classNames}>
                    {props.children}
                </div>
            </CSSTransition>

            <CSSTransition in={!props.in}
                           classNames={props.classNames}
                           unmountOnExit
                           timeout={300}
                           key={2}
            >
                <div className={props.classNames}>
                    <Preloader/>
                </div>
            </CSSTransition>
        </>
    )
};

export default WithPreloader;