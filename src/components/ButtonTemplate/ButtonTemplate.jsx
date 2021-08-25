import React from 'react'

const ButtonTemplate = (props) => {
    let modalType = ''
    if (props.modalEffect) {
        modalType = props.text === 'ADD USER' ? 'add' : 'edit';
    }
    return (
        <div>
            <div>
                <button
                    onClick={props.modalEffect ?  () => props.onClick(true, modalType) :  props.onClick}
                    disabled={props.disabled}
                    className={props.className}
                >
                    {props.text}
                </button>
            </div>
        </div>
    )


}
export default ButtonTemplate;