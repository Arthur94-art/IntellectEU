import React from 'react';
import PlayerCards from './playerCards';
import s from './players.module.scss';


const Players = () => {


    return <>
      <section>
          <h2 className={s.title}>Players</h2>
          <PlayerCards />
        
      </section>
    </>
}

export default Players;