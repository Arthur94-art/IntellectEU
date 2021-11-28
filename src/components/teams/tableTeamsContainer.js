import React, { useContext } from "react";
import { Context } from "../..";
import TableTeams from './tableTeams';


const TableTeamsContainer = () => {
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
            <TableTeams teams={teams[0]}
                meta={teams[1]}
                getColor={getColor} />
        </div>
    )
}


export default TableTeamsContainer;