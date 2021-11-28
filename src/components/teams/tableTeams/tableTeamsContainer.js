import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import *as actions from "../../../actions";
import TableTeams from "./tableTeams";


const TableTeamsContainer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(props.fetchTeams());
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
            <TableTeams teams={props.teams[0]} meta={props.teams[1]} getColor={getColor} />
        </div>
    )
}

function mapStateToTeams(state) {
    return state;
}

export default connect(mapStateToTeams, actions)(TableTeamsContainer);