
import React from "react";
import s from '../styles/table.module.scss';

const TableTeams = (props) => {

    return (
        <div id={s.main}>
            <div className={s.table_head}>
                <div className={s.table_head__name}>Name</div>
                <div className={s.table_head__city}>City</div>
                <div className={s.table_head__abb}>Abbreviation</div>
                <div className={s.table_head__conf}>Conference</div>
            </div>
            {props.teams.map((el, i) => {
                return (<div className={s.row} key={i}>
                    <div className={s.row_name}>{el.name}</div>
                    <div className={s.row_city}>{el.city}</div>
                    <div className={s.row_abb}>{el.abbreviation.toUpperCase()}</div>
                    <div className={s.row_conf}>
                        <div className={s.row_conf__budget} style={{
                            color: props.getColor(el.conference)[1],
                            background: props.getColor(el.conference)[0],
                            border: props.getColor(el.conference)[2]
                        }}>
                            {el.conference}
                        </div>
                    </div>
                </div>
                )
            })}
          
        </div>
    )
}

export default TableTeams;