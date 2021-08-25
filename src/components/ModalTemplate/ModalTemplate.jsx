import React, {useState, useEffect} from 'react'
import InputTemplate from "../InputTemplate/InputTemplate";
import SelectTemplate from "../SelectTemplate/SelectTemplate";
import selectLogin from "../../constants/selectLogin";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import classes from './ModalTemplate.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addNewUser, saveUserItem} from '../../redux/actions/actions'


const ModalTemplate = (props) => {
    const userItems = useSelector(state => state.users.userItems)
    const dispatch = useDispatch();

    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [selectCountry, setSelectCountry] = useState("");
 
    useEffect(() => {
        if (props.user) {
            setInputFirstName(props.user.firstName)
            console.log(props.user.firstName)
            setInputLastName(props.user.lastName)
            setSelectCountry(props.user.country)
        }
        console.log(props.user)
    }, [])

    const handlerFirstName = e => {
        setInputFirstName(e.target.value)
    }
    const handlerLastName = e => {
        setInputLastName(e.target.value)
        console.log(e.target.value)
    }
    const handlerSelectCountry = e => {
        setSelectCountry(e.target.value)
    }

    function addNewUserBtn() {
        const user = {
            firstName: inputFirstName,
            lastName: inputLastName,
            country: selectCountry,
            selected: false,
            id: userItems.length + 1,
            avatar: ''
        }
        dispatch(addNewUser(user))
        props.toggleModal(false)
        console.log(user)
    }

    const saveUser = () => {
        const user = {
            ...props.user,
            firstName: inputFirstName,
            lastName: inputLastName,
            country: selectCountry,
        }
        dispatch(saveUserItem(userItems, props.user.id, user))
        props.toggleModal(false)
    }

    const disabledAddBtn = !(inputFirstName && inputLastName)
   
    return (
        <div className={classes.modalTemplate}>
            <div className={classes['modalTemplate__form']}>
                <div className={classes['modalTemplate__box']}>
                    {
                        props.isModalType === 'add' ?
                            <h2 className={classes['modalTemplate__subtitle']}>ADD USER</h2>
                            : <h2 className={classes['modalTemplate__subtitle']}>EDIT</h2>
                    } 
                </div>
                <div className={classes['modalTemplate__container']}>
                    <InputTemplate
                        label={'First Name'}
                        type={'text'}
                        value={inputFirstName}
                        onChange={handlerFirstName}
                        className='app__input'
                    />
                    <InputTemplate
                        label={'Last Name'}
                        type={'text'}
                        value={inputLastName}
                        onChange={handlerLastName}
                        className='app__input'
                    />
                    <SelectTemplate
                        selectList={selectLogin}
                        value={selectCountry}
                        onChange={handlerSelectCountry}
                    />
                    {
                    props.isModalType === 'add'
                        ?  <ButtonTemplate
                            text={'ADD User'}
                            className='app__button app__button_primary mb-20'
                            onClick={addNewUserBtn}
                            disabled={disabledAddBtn}
                        /> :  <ButtonTemplate
                            text={'SAVE'}
                            className='app__button app__button_edit mb-20'
                            onClick={saveUser}
                        />
                }
                </div>
            </div>
        </div>
    )
}
export default ModalTemplate;