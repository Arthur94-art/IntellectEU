import React from 'react';
import TableTeamsContainer from './tableTeams/tableTeamsContainer';
import s from './teams.module.scss';


const Teams = () => {


    return <>
        <div className={s.table_head}>
            <div className={s.table_head__name}>Name</div>
            <div className={s.table_head__city}>City</div>
            <div className={s.table_head__abb}>Abbreviation</div>
            <div className={s.table_head__conf}>Conference</div>
        </div>
        <TableTeamsContainer style={{ overflowX: 'auto' }} />
    </>
}

export default Teams;