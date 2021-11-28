
import React, { useContext } from "react";

import PlayersCard from "./playersCard";
import s from './playerCards.module.scss'
import { Context } from "../..";
import PaginationContainerPlayers from "../pagination/paginationContainerPlayers";

const PlayersContainer = () => {

    const { players,
        pagePlayers,
        setPagePlayers,
        setSelectValuePlayers } = useContext(Context);


    return (
        <section>
            <h2 className={s.title}>Players</h2>
            <PlayersCard players={players} />
            <PaginationContainerPlayers teams={players}
                meta={players[1]}
                pagePlayers={pagePlayers}
                setSelectValuePlayers={setSelectValuePlayers}
                setPagePlayers={setPagePlayers}
            />
        </section>
    )

}

export default PlayersContainer;