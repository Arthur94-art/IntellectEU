
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTeams } from "../../../actions";
import s from './table.module.scss';
import PaginationContainer from "../../pagination/paginationContainer";





const TableTeams = (props) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [selectValue, setSelectValue] = useState(10);

    useEffect(() => {
        dispatch(fetchTeams(page, selectValue));

    },
        [dispatch, page, selectValue]);


    return (
        <div id={s.main}>
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
            <PaginationContainer meta={props.meta} teams={props.teams} page={page} selectValue={selectValue} setPage={setPage} setSelectValue={setSelectValue} />
        </div>
    )
}

export default TableTeams;