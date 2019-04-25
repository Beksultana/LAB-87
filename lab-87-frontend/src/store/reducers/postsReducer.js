import {FETCH_POSTS_SUCCESS} from "../actions/typeActions";

const initialState = {
    posts: []
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts};
        default:
            return state;
    }
};

export default  postsReducer;