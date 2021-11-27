import useEnhancedEffect from "@mui/utils/useEnhancedEffect";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "../../actions";
import PlayersCard from "./playersCard";
import s from './playerCards.module.scss'

const PlayersContainer = () => {

    const dispatch = useDispatch();
    const players = useSelector(state => state.players);
    useEnhancedEffect(() => {
        dispatch(fetchPlayers())
    }, [dispatch]);

    return (
        <section>
            <h2 className={s.title}>Players</h2>
            <PlayersCard players={players} />
        </section>
    )

}

export default PlayersContainer;