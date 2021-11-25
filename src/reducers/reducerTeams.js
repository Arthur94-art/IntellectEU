import { FETCH_TEAMS, SAVE_TEAMS } from "../actions/actions";



 function TeamsReducer(state = [], action) {
    switch (action.type) {
        case FETCH_TEAMS:
            const teams = action.payload.data.data.map(teams => {
                return {
                    abbreviation: teams.abbreviation,
                    city: teams.city,
                    id: teams.id,
                    name: teams.name
                }
            })
            return [...teams];

        case SAVE_TEAMS:

            return state

        default:
            return state
    }
}


export default TeamsReducer;