import * as types from './actionType'

const getData = (mydata) => ({
    type: types.GET_DATA,
    payload: mydata
})

export const latestdata = () => {
    return function (dispatch) {
        console.log("action")


        fetch(`http://localhost:4567/employee`, { method: 'GET' })
            .then((response) => response.json())
            .then((result) => {
                console.log("response", result)
                dispatch(getData(result))

            })
            .catch((error) => console.log(error))

    }
}