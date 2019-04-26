import axios from '../../axios-api';
import {CREATE_COMMENT_SUCCESS, FETCH_POST_SUCCESS} from "./typeActions";

const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});
const createComment = () => ({type: CREATE_COMMENT_SUCCESS});

export const fetchPost = postId => {
    return dispatch => {
        return axios.get('/posts/' + postId).then(response => {
            dispatch(fetchPostSuccess(response.data));
        })
    };
};

export const createComments = (commentData) => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {"Authorization": token}};
        return axios.post('/comments', commentData, config).then(
            response => {
                dispatch(createComment());
            }
        )
    };
};