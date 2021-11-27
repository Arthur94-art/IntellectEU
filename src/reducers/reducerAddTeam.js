import { ADD_TEAM } from "../actions/actions";

export const AddTeamReducer = (state = [], action) => {
    switch (action.type) {
     
        case ADD_TEAM:
            return [...state, action.payload];

        default:
            return [...state]
    }
}