import { ActionTypes } from "./action.types";


export const generalReducer = (state, action) => {

    switch (action.type) {

        case ActionTypes.TIME_UPDATE:
            return { ...state, time:Date.now() } ;

        default:
            return state;
    }
}