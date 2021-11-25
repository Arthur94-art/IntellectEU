import { FETCH_PLAYERS } from "../actions/actions";


export const PlayersReducer = (state = [], action) => {

    switch (action.type) {
        case FETCH_PLAYERS:

            return [...state, action.payload.data.data.map((el) => {
                const players = {
                    first_name: el.first_name,
                    last_name: el.last_name
                }
                return players;
            })]
        default:
            return [...state];

    }

}