import axios from "axios";
export const AUTH_SUCESS  = 'AUTH_SUCESS';
export const USERS  = 'USERS';
export const USERS_ERROR  = 'USERS_ERROR';
export const authSuccess  = () => {
    return {
        type: AUTH_SUCESS,
        payload: {
            id: 1,
            name: 'Rishabh'
        }
    }
}

export const getApi =  () =>  async (dispatch) => {
        try {
        const resp = await axios.get('http://localhost:5001/api/current_user')
        console.log("resp", resp.data)
        dispatch({
            type: USERS,
            payload: resp.data
        })
    } catch (e) {
        console.log("Error", e)
        dispatch({
            type: USERS_ERROR,
            payload: {msg: 'Error'}
        })
    }
    }


// export async function getApi() {
//     return async function(dispatch) {
//                 try {
//         const resp = await axios.get('https://dummyjson.com/products/1')
//         console.log("resp", resp.data)
//         dispatch({
//             type: USERS,
//             payload: {id: 1}
//         })
//     } catch (e) {
//         console.log("Error", e)
//         dispatch({
//             type: USERS_ERROR,
//             payload: {msg: 'Error'}
//         })
//     }
//     };
// }