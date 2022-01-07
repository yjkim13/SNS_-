import { HYDRATE } from "next-redux-wrapper";

import user from './user'
import post from './post'
import { combineReducers } from "redux";

//(이전 상태, action) 통해서 다음 상태로 변경
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {

            case HYDRATE:
                return { ...state, ...action.payload };

            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;