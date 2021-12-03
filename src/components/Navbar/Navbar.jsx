import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import UserCircle from "./../../assets/UserCircle.svg";
import s from "./Navbar.module.css";
import {config} from "../../config";

const Navbar = (props) => {
    const items = config.pages.map(page =>
        <NavLink exact className={s.link} key={page.path} to={page.path} activeClassName={s.active} >
            {page.name}
        </NavLink>
    );
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>
                logo
            </div>
            <nav className={s.nav}>
                {items}
            </nav>
            <div className={s.cabinet}>
                <img src={UserCircle} alt=""/>
            </div>
        </div>
    )
};

export default withRouter(Navbar);