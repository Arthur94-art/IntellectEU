import React from 'react';
import s from './playerCards.module.scss';


const PlayersCard = (props) => {

  return (<div>
    <div className={s.row}>
      {props.players[0].map((el) => {
        return (<div key={el.id} >
          <div className={s.col}>
            <div className={s.col_icon}>{el.first_name[0]}{el.last_name[0]}</div>
            <div className={s.col_blcok}>
              <div className={s.col_first_name}>{el.first_name} </div>
              <div className={s.col_last}>{el.last_name}</div></div>
          </div>
        </div>)
      })}
    </div>
  </div>)
}

export default PlayersCard;