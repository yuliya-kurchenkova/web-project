import { 
    ADD_NEW_USER, 
    DELETE_USER, 
    SORT_USER, 
    DUBLICATE_USER, 
    CHANGE_SELECT, 
    DELETE_ITEMS, 
    SAVE_USER
} from '../../constants/types'



export function addNewUser(item) {
    return {
        type: ADD_NEW_USER,
        payload: item
    }
}

export function deleteUser(list, id) {
    return {
        type: DELETE_USER,
        payload:  list.filter(item => item.id !== id)
    }
}

export function dublicateUser(list, item) {
    console.log(list)
    const dublicateUser = {
        ...item,
        id: list.length + 1
    }
    list.push(dublicateUser)
    return {
         type: DUBLICATE_USER,
         payload: [...list]
    }
}

export function sortUser(list, type) {
    console.log(list)
    return dispatch => {
        list.sort((a, b) => {
            if (type === 'sortA') {
                if (a.firstName < b.firstName) {
                    return -1
                }
            } else {
                if (a.firstName > b.firstName) {
                    return -1
                }
            }
        })
        dispatch({
            type: SORT_USER,
            payload: [...list]
        })
    }
}

export function selectChangeUser(list, id) {
    const currentUser = list.find(item => item.id === id)
    currentUser.selected = !currentUser.selected
    return {
        type: CHANGE_SELECT,
        payload: [...list]
    }
 }

export function deleteUsersItems(list) {
    return {
        type: DELETE_ITEMS,
        payload: list.filter(item => !item.selected)
    }
}

export function saveUserItem(list, id, user) {
        const indexUser = list.findIndex((item) => item.id === id)
        list.splice(indexUser, 1, user)
    return {
            type: SAVE_USER,
            payload: [...list]
    }
}


