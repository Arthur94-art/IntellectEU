
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "../../actions";
import PlayersCard from "./playersCard";
import s from './playerCards.module.scss'
import PaginationContainer from "../pagination/paginationContainer";

const PlayersContainer = () => {

    const dispatch = useDispatch();
    const players = useSelector(state => state.players);

    const [page, setPage] = useState(1);
    const [selectValue, setSelectValue] = useState(8);

    useEffect(() => {
        dispatch(fetchPlayers(page, selectValue));

    },
        [dispatch, page, selectValue]);

    return (
        <section>
            <h2 className={s.title}>Players</h2>
            <PlayersCard players={players} />
            <PaginationContainer teams={players} meta={players[1]} page={page} selectValue={selectValue} setPage={setPage} setSelectValue={setSelectValue} />
        </section>
    )

}

export default PlayersContainer;