
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../../actions";
import TableTeams from "./tableTeams";




const TableTeamsContainer = () => {
    const teams = useSelector(state => state.teams);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTeams());
    }, [dispatch]);


    function getColor(conf) {
        if (conf === "East") {
            return ['#DAF5EE', '#1FAD87', '1px solid #DAF5EE']
        } else {
            return ['#FFEAE3', '#E64A18', '1px solid #FFEAE3']
        }
    }
    return (
        <div >
            <TableTeams teams={teams[0]} meta={teams[1]} getColor={getColor} />
        </div>
    )
}

export default TableTeamsContainer;