import { SAVE_TEAMS, FETCH_TEAMS, FETCH_PLAYERS } from "./actions";
import axios from "axios";


export function fetchTeams(page = 0, perPage = 15) {
    const response = axios.get(`https://www.balldontlie.io/api/v1/teams?page=${page}&per_page=${perPage}`)
    return {
        type: FETCH_TEAMS,
        payload: response
    }
}

export function fetchPlayers(page = 0, perPage = 8) {
    const response = axios.get(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${perPage}
`)
    return {
        type: FETCH_PLAYERS,
        payload: response

    }
}
