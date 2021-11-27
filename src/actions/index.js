import { FETCH_TEAMS, FETCH_PLAYERS, ADD_TEAM } from "./actions";
import axios from "axios";


export function fetchTeams(page = 1, perPage = 10) {
    const response = axios.get(`https://www.balldontlie.io/api/v1/teams?page=${page}&per_page=${perPage}`)
    return {
        type: FETCH_TEAMS,
        payload: response
    }
}


export function fetchPlayers(page = 1, perPage = 8) {
    const response = axios.get(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${perPage}
`)
    return {
        type: FETCH_PLAYERS,
        payload: response

    }
}

export function addNewTeam(name = '', city = '', abb = '', conf = '') {
    const newTeam = {
        name: name,
        city: city,
        abbreviation: abb,
        conference: conf
    }
    return {
        type: ADD_TEAM,
        payload: newTeam

    }
}

