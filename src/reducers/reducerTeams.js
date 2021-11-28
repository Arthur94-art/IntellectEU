import { ADD_TEAM, FETCH_TEAMS } from "../actions/actions";



function TeamsReducer(state = [[], {}], action) {
    switch (action.type) {
        case FETCH_TEAMS:
            const meta = {
                current_page: action.payload.data.meta.current_page,
                total_pages: action.payload.data.meta.total_pages,
                next_page: action.payload.data.meta.next_page,
                per_page: action.payload.data.meta.per_page,
                total_count: action.payload.data.meta.total_count
            }
            const teams = action.payload.data.data.map(teams => {
                return {
                    abbreviation: teams.abbreviation,
                    city: teams.city,
                    id: teams.id,
                    name: teams.name,
                    conference: teams.conference,
                }
            })
            return [[...teams], meta];

        case ADD_TEAM:
            state[0].unshift(action.payload)
            return [...state];

        default:
            return [...state]
    }
}


export default TeamsReducer;