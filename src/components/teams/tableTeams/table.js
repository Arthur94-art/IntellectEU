
import React, { useEffect } from "react";
import { useContext } from "react";
import s from './table.module.scss';
import Pagination from './pagination';
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../../actions";



const Table1 = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTeams());
    }, [dispatch])
    const teams = useSelector(state => state.teams)

    function getColor(conf) {
        if (conf === "East") {
            return ['#DAF5EE', '#1FAD87', '1px solid #DAF5EE']
        } else {
            return ['#FFEAE3', '#E64A18', '1px solid #FFEAE3']
        }
    }

    return (
        <div >
            {teams.map((el) => {

                return (<div className={s.row} key={el.id}>
                    <div className={s.row_name}>{el.name}</div>
                    <div className={s.row_city}>{el.city}</div>
                    <div className={s.row_abb}>{el.abbreviation}</div>
                    <div className={s.row_conf}>
                        <div className={s.row_conf__budget} style={{
                            color: getColor(el.conference)[1],
                            background: getColor(el.conference)[0],
                            border: getColor(el.conference)[2]
                        }}>
                            {el.conference}
                        </div>
                    </div>
                </div>

                )


            })}
            <Pagination />
        </div>
    )
}

export default Table1;