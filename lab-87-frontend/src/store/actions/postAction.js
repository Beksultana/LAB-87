import axios from '../../axios-api';
import {FETCH_POST_SUCCESS} from "./typeActions";

const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});

export const fetchPost = postId => {
    return dispatch => {
        return axios.get('/posts/' + postId).then(response => {
            dispatch(fetchPostSuccess(response.data));
        })
    };
};