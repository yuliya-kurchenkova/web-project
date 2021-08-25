import {
    ADD_NEW_USER,
    DELETE_USER,
    DUBLICATE_USER,
    CHANGE_SELECT,
    DELETE_ITEMS,
    SAVE_USER,
    SORT_USER,
} from '../../constants/types';


const initialState = {
    userItems: [
        {
            id: 1,
            avatar: '',
            firstName: 'Yulia',
            lastName: 'Kurchenkova',
            country: 'Belarus',
            selected: true
        }, {
            id: 2,
            avatar: '',
            firstName: 'Anna',
            lastName: 'Kurchenkova',
            country: 'Belarus',
            selected: false
        }, {
            id: 3,
            avatar: '',
            firstName: 'Nikita',
            lastName: 'Petrov',
            country: 'Belarus',
            selected: false
        }
    ],
};

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            return {
                ...state,
                userItems: [
                    ...state.userItems,
                    action.payload
                ]
            }
        case DELETE_USER:
            return {
                ...state,
                userItems: action.payload
            }
        case DUBLICATE_USER:
            return {
                ...state,
                userItems: action.payload
            }
        case CHANGE_SELECT:
            console.log(action.payload)
            return {
                ...state,
                userItems: action.payload
            }
        case SORT_USER:
                console.log(action.payload)
                return {
                    ...state,
                    userItems: action.payload
            }
        case DELETE_ITEMS:
            return {
                ...state,
                userItems: action.payload
            }
        case SAVE_USER:
            return {
                ...state,
                userItems: action.payload
            }
            
    }
    return state;
}