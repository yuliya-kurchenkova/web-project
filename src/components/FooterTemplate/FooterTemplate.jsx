import React from 'react'
import classes from './FooterTemplate.module.scss'


const FooterTemplate = () => (
    <div className={classes.footerTemplate}>
        <p className={classes['footerTemplate__text']}>
            Copyright 2021, WebFriends Team
        </p>
    </div>
)
export default FooterTemplate;