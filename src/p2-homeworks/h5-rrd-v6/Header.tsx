import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <div><NavLink to={'/pre-junior'}>PreJunior</NavLink></div>
            <div><NavLink to={'/junior'}>Junior</NavLink></div>
            <div><NavLink to={''}>Junior+</NavLink></div>
        </div>
    )
}

export default Header
