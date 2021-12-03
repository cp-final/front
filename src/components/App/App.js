import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {config} from "../../config";
import {CSSTransition} from "react-transition-group";
import "./../../index.css";

const App = () => {
    const [show, setShow] = useState(true);
    const content = config.pages.map(page => {
            return (
                <Route exact key={page.path} path={page.path}>
                    {
                        ({match}) => {
                            return <CSSTransition
                                in={match != null}
                                timeout={200}
                                classNames="page"
                                unmountOnExit
                            >
                                <div className="page">
                                    <page.Component/>
                                </div>
                            </CSSTransition>
                        }
                    }
                </Route>
            )
        }
    );
    return (
        <div>
            <Navbar/>
            {content}

            {/*<CSSTransition*/}
            {/*    in={show}*/}
            {/*    classNames={"page"}*/}
            {/*    timeout={200}*/}
            {/*>*/}
            {/*    <div onClick={() => setShow(!show)}>*/}
            {/*        I'm showable*/}
            {/*    </div>*/}
            {/*</CSSTransition>*/}
        </div>
    );
};

export default App;
