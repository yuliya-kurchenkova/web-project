import React from 'react'
import classes from './InputTemplate.module.scss'

const InputTemplate = (props) => {
    return (
        <div className={classes.inputTemplate}>
            <label className={classes['inputTemplate__label']}>
                <div className={classes['inputTemplate__text']}>{props.label}</div>
                <input
                 type={props.type}
                 value={props.value}
                 onChange={props.onChange}
                 className={props.className}
                 placeholder={props.placeholder}
                 maxLength={props.maxLength}
                />
            </label>
        </div>
    )
}
export default InputTemplate;