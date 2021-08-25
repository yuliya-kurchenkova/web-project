import React from 'react'
import logo from '../../assets/img/logo.png'
import classes from './ItemTemplate.module.scss'


const ItemTemplate = () => {
    return (
        <div className={classes.itemTemplate}>
            <img
                src={logo}
                alt={''}
                className='app__img'
            />
        </div>
    )
}
export default ItemTemplate;