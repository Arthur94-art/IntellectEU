import React, { useContext } from "react";
import { Context } from "../..";

import PaginationPlayers from "./paginationPlayers";




const PaginationContainerPlayers = () => {

    const { pagePlayers,
        setPagePlayers,
        selectValuePlayers,
        setSelectValuePlayers,
        players,
        onHandleNextClick,
        onHandlePrevCliсk,
        getArrPerPAges,
        getArrSelecValue } = useContext(Context);



    return (
        <div>
            <PaginationPlayers
                selectValuePlayers={selectValuePlayers}
                setSelectValuePlayers={setSelectValuePlayers}
                onHandleNextClick={onHandleNextClick}
                onHandlePrevCliсk={onHandlePrevCliсk}
                meta={players[1]}
                getArrPerPAges={getArrPerPAges}
                setPagePlayers={setPagePlayers}
                pagePlayers={pagePlayers}
                players={players[0]}
                getArrSelecValue={getArrSelecValue}
            />
        </div>
    )
}

export default PaginationContainerPlayers;