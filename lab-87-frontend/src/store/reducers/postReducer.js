import {FETCH_POST_SUCCESS} from "../actions/typeActions";

const initialState = {
    post: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return {...state, post: action.post};
        default:
            return state;
    }
};

export default  postReducer;