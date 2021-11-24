
import { Context } from '../../..';
import React from "react";
import { useContext } from "react";
import s from './table.module.scss';
import Pagination from './pagination';



const Table1 = () => {
    const { teams } = useContext(Context);
    function getColor(conf) {
        if (conf === "East") {
            return ['#DAF5EE', '#1FAD87', '1px solid #DAF5EE']
        } else {
            return ['#FFEAE3', '#E64A18', '1px solid #FFEAE3']
        }
    }

    return (
        <div >
            {teams.map((el, i) => {

                return (<div className={s.row} key={el.id}>
                    <div className={s.row_name}>{el.full_name.match(/\w+$/)[0]}</div>
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