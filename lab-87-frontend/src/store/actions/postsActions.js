import axios from '../../axios-api';
import {FETCH_POSTS_SUCCESS} from "./typeActions";

const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});

export const fetchPosts = () => {
    return dispatch => {
        return axios.get('/posts').then(response => {
            dispatch(fetchPostsSuccess(response.data))
        })
    }
};