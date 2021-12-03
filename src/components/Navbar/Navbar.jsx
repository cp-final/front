import React, {useState} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import s from "./Navbar.module.css";
import {config} from "../../config";
import BurgerButton from "./BurgerButton/BurgerButton";

const Navbar = (props) => {
    const [menuIsOn, setMenuIsOn] = useState(false);
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
            <div>
                <BurgerButton isOn={menuIsOn} handleToggle={() => setMenuIsOn(!menuIsOn)}/>
            </div>
        </div>
    )
};

export default withRouter(Navbar);