import axios from '../../axios-api';
import {FETCH_COMMENT_SUCCESS} from "./typeActions";

const fetchCommentSuccess = comments => ({type: FETCH_COMMENT_SUCCESS, comments});

export const fetchComments = postId => {
    return dispatch => {
        return axios.get('/comments?posts=' + postId).then(response => {
            dispatch(fetchCommentSuccess(response.data));
        })
    };
};