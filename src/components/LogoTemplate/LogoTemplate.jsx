import React from 'react'
import logo from '../../../src/assets/img/logo.png'
import classes from './LogoTemplate.module.scss'

const LogoTemplate = () => (
    <div className={classes.logoTemplate}>
        <img
            src={logo}
            alt=""
            className={classes['logoTemplate__img']}
        />
    </div>
)
export default LogoTemplate;