import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {

    const [focus, setFocus] = useState<boolean>(false)

    const removeFocus = () => {
        setFocus(false)
    }

    return (
        <div className={s.header}>
            <div onMouseOver={() => setFocus(true)} className={s.menu}>Меню</div>
            {focus &&
            <div className={s.link}>
                <div onClick={removeFocus} className={s.item}><NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink></div>
                <div onClick={removeFocus} className={s.item}><NavLink to={PATH.JUNIOR}>Junior</NavLink></div>
                <div onClick={removeFocus} className={s.item}><NavLink to={PATH.ERROR}>Junior+</NavLink></div>
            </div>}
        </div>
    )
}

export default Header
