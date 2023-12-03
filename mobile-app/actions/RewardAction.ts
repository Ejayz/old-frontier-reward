import axios from "axios";

const apiRoute = '/rewards'

export const GetData = (url = apiRoute, params = {}) => async dispatch => {
    try {

        dispatch({
            type: "REWARD_REQUEST"
        })

        const res = await axios.get(url, {params: params})

        dispatch({
            type: "REWARD_FETCH",
            payload: res.data.data
        })

        return Promise.resolve();
        
    } catch (error) {

        dispatch({
            type: "REWARD_FAIL",
            payload: error.response.data
        })

        return Promise.reject(error);
        
    }
}

export const AddData = (data) => async dispatch => {
    try {

        dispatch({
            type: "REWARD_REQUEST"
        })

        const res = await axios.post(apiRoute, data)

        dispatch({
            type: "REWARD_ADD",
            payload: res.data.data
        })

        return Promise.resolve();
        
    } catch (error) {

        dispatch({
            type: "REWARD_FAIL",
            payload: error.response.data
        })

        return Promise.reject(error);
        
    }
}

export const EditData = (data) => async dispatch => {
    try {

        dispatch({
            type: "REWARD_REQUEST"
        })

        const res = await axios.put(apiRoute + '/' + data.id, data)

        dispatch({
            type: "REWARD_UPDATE",
            payload: res.data.data
        })

        return Promise.resolve();
        
    } catch (error) {

        dispatch({
            type: "REWARD_FAIL",
            payload: error.response.data
        })

        return Promise.reject(error);
        
    }
}

export const DeleteData = (id) => async dispatch => {
    try {

        dispatch({
            type: "REWARD_REQUEST"
        })

        const res = await axios.delete(apiRoute + '/' + id)

        dispatch({
            type: "REWARD_DELETE",
            payload: res.data.data
        })
        
    } catch (error) {

        dispatch({
            type: "REWARD_FAIL",
            payload: error.response.data.message
        })
        
    }
}