import { FETCH_PLAYERS } from "../actions/actions";


export const PlayersReducer = (state = [[], {}], action) => {

    switch (action.type) {
        case FETCH_PLAYERS:
            const meta = {
                current_page: action.payload.data.meta.current_page,
                total_pages: action.payload.data.meta.total_pages,
                next_page: action.payload.data.meta.next_page,
                per_page: action.payload.data.meta.per_page,
                total_count: action.payload.data.meta.total_count
            }
            const players = action.payload.data.data.map(p => {
                return {
                    id: p.id,
                    first_name: p.first_name,
                    last_name: p.last_name,
                }
            })
            return [[...players], meta];
        default:
            return [...state];

    }

}