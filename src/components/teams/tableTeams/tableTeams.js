
import React from "react";
import s from './table.module.scss';
import PaginationContainer from "../pagination/paginationContainer";




const TableTeams = (props) => {
        return (
        <div id={s.main}>
            {props.teams.map((el, i) => {
                return (<div className={s.row} key={i}>
                    <div className={s.row_name}>{el.name}</div>
                    <div className={s.row_city}>{el.city}</div>
                    <div className={s.row_abb}>{el.abbreviation}</div>
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
            <PaginationContainer meta={props.meta}  teams={props.teams} />
        </div>
    )
}

export default TableTeams;