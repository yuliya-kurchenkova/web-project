import React, {useState, useEffect} from 'react'
import InputTemplate from "../../components/InputTemplate/InputTemplate";
import SelectTemplate from "../../components/SelectTemplate/SelectTemplate";
import classes from './UserPage.module.scss'
import select from "../../constants/select";
import ButtonTemplate from "../../components/ButtonTemplate/ButtonTemplate";
import ModalTemplate from "../../components/ModalTemplate/ModalTemplate";
import logo from '../../assets/img/logo.png'
import { useSelector, useDispatch } from "react-redux";
import {sortUser, dublicateUser, deleteUser, selectChangeUser, deleteUsersItems} from "../../redux/actions/actions";


const UserPage = (props) => {
    const dispatch = useDispatch();
    const userItems = useSelector(state => state.users.userItems)

    const [inputSearch, setInputSearch] = useState('')
    const [userItemsTest, setUserItemsTest] = useState(userItems);
    const [isVisibleModal, setVisibleModal] = useState(false);
    const [isModalType, setIsModalType] = useState('')
    const [inputTableName, setInputTableName] = useState('')
    const [inputColor, setInputColor] = useState('#86b6b3')
    const [inputFont, setInputFont] = useState('Ubuntu')
    const [modalItem, setModalItem] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    
    useEffect(() => {
        setUserItemsTest(userItems)
        const filtered = inputSearch ? userItemsTest.filter((user) => user.firstName.match(inputSearch)) : userItems
        setUserItemsTest(filtered);
    }, [inputSearch])

    useEffect(() => {
        setUserItemsTest(userItems)
    }, [userItems])

    const handlerInputFont = (e) => {
        setInputFont(e.target.value)
    }

    const handlerInputColor = (e) => {
        setInputColor(e.target.value)
    }

    const handlerInputTableName = (e) => {
        setInputTableName(e.target.value)
    }

    const toggleModal = (data) => {
        setVisibleModal(data)
        setModalItem(null)
    }

    const sort = (type) => {
        dispatch(sortUser(userItems, type))
    }

    const dublicateItemUser = (item) => {
        dispatch(dublicateUser(userItems, item))
    }

    const deleteItemUser = (id) => {
        dispatch(deleteUser(userItems, id))
    }

    const toggleUser = (id) => {
        dispatch(selectChangeUser(userItems, id))
    }
    const deleteItems = () => {
        dispatch(deleteUsersItems(userItems))
    }

    const addUser = (item) => {
        setIsModalType('add')
        setVisibleModal(true)
        setModalItem({})
    }

    const editUser = (item) => {
        setIsModalType('edit')
        setVisibleModal(true)
        setModalItem(item)
    }

    return (

        <div className={classes.userPage}>
            <div className={classes['userPage__wrap']}>
                <div className={classes['userPage__form']}>
                    <div className={classes['userPage__box']}
                         style={{
                             background: inputColor,
                             fontFamily: inputFont
                         }}
                    >
                          <div className={classes['userPage__content']} >
                            {
                                inputTableName ?
                                    <h2 className={classes['userPage__subtitle']}>{inputTableName}</h2>
                                    :  <h2 className={classes['userPage__subtitle']}>Users</h2>
                            }
                        </div>
                            <ButtonTemplate
                                text={'ADD USER'}
                                className='app__button app__button_primary'
                                onClick={() => addUser(userItems.length + 1)}
                                modalEffect={true}
                            />
                            <ButtonTemplate
                                text={'DELETE ITEMS'}
                                className='app__button app__button_success'
                                onClick={deleteItems}
                            />
                          <div className={classes['userPage__sort']}> 
                              <div>
                                  <p className={classes['userPage__subtitle']}>Sort By</p>
                              </div>
                              <div>
                                <div 
                                    className={classes['userPage__sortA']}
                                    onClick={()=> sort('sortA')}>
                                
                                </div>
                                <div 
                                    className={classes['userPage__sortB']} 
                                    onClick={()=> sort('sortB')}>
                                    
                                </div>
                              </div>
                            
                          </div>
                          
                        <div>
                             <InputTemplate
                                className='app__search'
                                type={'text'}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}
                                placeholder={'Search by Name'}
                            />
                     
                        </div>
                    </div>
                    <div className={classes['userPage__list']}>
                {
                    userItems.filter((val) => {
                        if(searchTerm === '') {
                            return val;
                        } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map(user => {
                        return (
                            <div className={classes['userPage__item']}
                                key={user.id}
                            >
                                <div className={classes['userPage__user']}>
                                    <div>
                                        <input type='checkbox'
                                            checked={user.selected}
                                            onChange={() => toggleUser(user.id)}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={logo}
                                            alt=''
                                            width={'50px'}
                                        />
                                    </div>
                                    <div className={classes['userPage__holder']}>
                                        <div className={classes['userPage__inner']}>
                                            <p className='app__text mr-5'>{user.firstName}</p>
                                            <p className='app__text'>{user.lastName}</p>
                                        </div>
                                        <div className={classes['userPage__inner']}>
                                            <p className={classes['userPage__text']}>{user.country}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['userPage__btn']}>
                                   <ButtonTemplate
                                        text={'DUBLICATE'}
                                        onClick={() => dublicateItemUser(user)}
                                        className='app__button app__button_dubl'
                                    />
                                    <ButtonTemplate
                                        text={'EDIT'}
                                        onClick={() => editUser(user)}
                                        className='app__button app__button_edit'
                                    />
                                    <ButtonTemplate
                                        text={'DELETE'}
                                        onClick={() => deleteItemUser(user.id)}
                                        className='app__button app__button_success'
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                     </div>
                </div>
                <div className={classes['userPage__settings']}>
                    <div className={classes['userPage__box']}>
                        <h2 className={classes['userPage__subtitle']}>Settings</h2>
                    </div>
                    <div className={classes['userPage__container']}>
                        <InputTemplate
                            placeholder={'Title of table'}
                            className='app__input'
                            value={inputTableName}
                            onChange={handlerInputTableName}
                            maxLength={10}
                        />
                        <SelectTemplate
                            selectList={select}
                            value={inputFont}
                            onChange={handlerInputFont}
                        />
                        <p className='pb-10'>Accent Color:</p>
                        <input
                            type={'color'}
                            onChange={handlerInputColor}
                            value={inputColor}
                        />       
                    </div>
                </div>
            </div>
            {
                modalItem || isVisibleModal
                    ? <ModalTemplate
                        toggleModal={toggleModal}
                        setVisible={setVisibleModal}
                        isModalType={isModalType}
                        user={modalItem}
                    /> 
                    : null
              }
        </div>
    )
}
export default UserPage;