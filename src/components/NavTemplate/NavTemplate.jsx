import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './NavTemplate.module.scss'

export const NavTemplate = () => (          
    <nav className={classes.navTemplate}>
        <ul className={classes['navTemplate__list']}>
            <li className={classes['navTemplate__item']}>
                <NavLink exact to="/" className={classes['navTemplate__link']}>Users</NavLink>
            </li>
            <li className={classes['navTemplate__item']}>
                <NavLink to="/admin" className={classes['navTemplate__link']}>Admin Panel</NavLink>
            </li>
        </ul>
    </nav>
)
