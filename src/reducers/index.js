import { combineReducers } from "redux";
import TeamsReducer from "./reducerTeams";
import { PlayersReducer } from "./reducerPlayers";
import { AddTeamReducer } from "./reducerAddTeam";


export default combineReducers({
    teams: TeamsReducer,
    players: PlayersReducer,
    team: AddTeamReducer
})