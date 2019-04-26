import axios from '../../axios-api';
import {CREATE_POST_SUCCESS, FETCH_POSTS_SUCCESS} from "./typeActions";
import {push} from 'connected-react-router';

const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
const createPostSuccess = () => ({type: CREATE_POST_SUCCESS});

export const fetchPosts = () => {
    return dispatch => {
        return axios.get('/posts').then(response => {
            dispatch(fetchPostsSuccess(response.data))
        })
    }
};

export const createPost = postData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {"Authorization": token}};
        return axios.post('/posts', postData, config).then(
            response => {
                dispatch(createPostSuccess());
                dispatch(push('/'))
            }
        )
    };
};