import React from 'react'
import {NavTemplate} from "../NavTemplate/NavTemplate";
import classes from './HeaderTemplate.module.scss'
import LogoTemplate from "../LogoTemplate/LogoTemplate";

const HeaderTemplate = () => {
    return (
        <div className={classes.headerTemplate}>
            <LogoTemplate />
            <NavTemplate />
        </div>
    )
}
export default HeaderTemplate;