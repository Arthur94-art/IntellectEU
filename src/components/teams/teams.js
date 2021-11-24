import React from 'react';
import Table1 from './tableTeams/table';
import s from './teams.module.scss';

// abbreviation: "ATL"
// city: "Atlanta"
// conference: "East"
// division: "Southeast"
// full_name: "Atlanta Hawks"
// id: 1
// name: "Hawks"

const Teams = () => {


    return <>
        <div className={s.table_head}>
            <div className={s.table_head__name}>Name</div>
            <div className={s.table_head__city}>City</div>
            <div className={s.table_head__abb}>Abbreviation</div>
            <div className={s.table_head__conf}>Conference</div>
        </div>
        <Table1 />
    </>
}

export default Teams;