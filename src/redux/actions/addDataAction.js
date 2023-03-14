import * as types from './actionType'
import Axios from 'axios'
import { latestdata } from './getDataAction'

const empAdded = () => ({
    type: types.ADD_DATA

})

export const addData = (user) => {
    //console.log("initialValues")
    return function (dispatch) {
        // console.log("add action")
        Axios.put(`http://localhost:4567/employee/`, user)

            .then((result) => {
                console.log("response", result)
                dispatch(empAdded())
                dispatch(latestdata())


            })
            .catch((error) => console.log(error))

    }
}