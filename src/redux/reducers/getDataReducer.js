import * as types from '../actions/actionType'

const initialState = {
    users: [],
    user: {},
    loading: false
}

const empDetail = (state = initialState, action) => {
    console.log("reducer")

    switch (action.type) {
        case types.GET_DATA:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case types.ADD_DATA:
            return {
                ...state,
                loading: false
            }
        //updated state
        default:
            return state    //old state
    }
}

export default empDetail