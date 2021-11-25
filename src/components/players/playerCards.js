import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "../../actions";
// import s from './playerCards.module.scss'

const PlayerCards = () => {
     const dispatch = useDispatch();
     const players = useSelector(state => state.players);
     useEffect(() => {
         dispatch(fetchPlayers())
     }, [dispatch]);


     console.log(players)
    return (<div></div>)
     
}

export default PlayerCards;