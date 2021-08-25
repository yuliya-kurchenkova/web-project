import React from 'react'
import classes from './SelectTemplate.module.scss'

const SelectTemplate = props => {

    return (
        <div className={classes.selectTemplate}>
            <label className={classes['selectTemplate__label']}>
                <div className={classes['inputTemplate__text']}>{props.label}</div>
            </label>
            <div className={classes['selectTemplate__select']}>
                <select
                    value={props.value}
                    onChange={props.onChange}
                    className={classes['selectLogin__select']}
                >
                    { props.selectList.map((option, index) => {
                        return (
                            <option
                                value={option.text}
                                key={index}
                                className={classes['selectTemplate__option']}
                            >
                                {option.text}
                            </option>
                        )
                    }) }
                </select>
            </div>
        </div>
    )
}

export default SelectTemplate