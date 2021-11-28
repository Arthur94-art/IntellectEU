import React, { useContext } from "react";
import { Context } from "../..";
import PaginationTeams from "./paginationTeams";



const PaginationContainerTeams = () => {
    const { pageTeams,
        setPageTeams,
        selectValue,
        setSelectValue,
        teams,
        onHandleNextClick,
        onHandlePrevCliсk,
        getArrPerPAges,
        getArrSelecValue } = useContext(Context);



    return (
        <div>
            <PaginationTeams
                selectValue={selectValue}
                setSelectValue={setSelectValue}
                onHandleNextClick={onHandleNextClick}
                onHandlePrevCliсk={onHandlePrevCliсk}
                meta={teams[1]}
                getArrPerPAges={getArrPerPAges}
                setPageTeams={setPageTeams}
                pageTeams={pageTeams}
                teams={teams[0]}
                getArrSelecValue={getArrSelecValue}
            />
        </div>
    )
}

export default PaginationContainerTeams;