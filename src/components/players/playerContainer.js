
import React, { useContext } from "react";

import PlayersCard from "./playersCard";
import s from './playerCards.module.scss'
import { Context } from "../..";

const PlayersContainer = () => {

    const { players } = useContext(Context);


    return (
        <section>
            <h2 className={s.title}>Players</h2>
            <PlayersCard players={players} />
           
        </section>
    )

}

export default PlayersContainer;