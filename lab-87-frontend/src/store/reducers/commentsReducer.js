import {FETCH_COMMENT_SUCCESS} from "../actions/typeActions";

const initialState = {
    comments: []
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENT_SUCCESS:
            return {...state, comments: action.comments};
        default:
            return state;
    }
};

export default  commentsReducer;