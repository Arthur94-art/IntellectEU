import { combineReducers } from "redux";
import TeamsReducer from "./reducerTeams";
import { PlayersReducer } from "./reducerPlayers";


export default combineReducers({
    teams: TeamsReducer,
    players: PlayersReducer
})