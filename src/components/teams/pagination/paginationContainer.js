import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTeams } from "../../../actions";
import Pagination from "./pagination";


// const PaginationContainer = (props) => {

//     return withData(PaginationContainer, Pagination, fetchTeams)
// }

// export default PaginationContainer;


const PaginationContainer = (props) => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [selectValue, setSelectValue] = useState(10);

    useEffect(() => {
        dispatch(fetchTeams(page, selectValue));

    },
        [dispatch, page, selectValue]);

    const onHandleNextClcik = () => {
        setPage(page + 1);
    }
    const onHandlePrevClcik = () => {
        setPage(page - 1);
    }

    function getArrPerPAges(num) {
        const newArr = [];
        for (let i = 0; i < num; i++) {
            newArr.push(i + 1)
        }
        return newArr;
    }

    function getArrSelecValue(arr, curr, total) {
        let newArr = [];
        if (arr.length < 10 && curr === total) {
            for (let i = 0; i < arr.length; i++) {
                newArr.push(i + 1);
            }
            return newArr
        } else {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }

    }

    return (
        <div>
            <Pagination
                selectValue={selectValue} setSelectValue={setSelectValue}
                onHandleNextClcik={onHandleNextClcik}
                onHandlePrevClcik={onHandlePrevClcik}
                meta={props.meta}
                getArrPerPAges={getArrPerPAges}
                setPage={setPage}
                page={page}
                teams={props.teams}
                getArrSelecValue={getArrSelecValue}
            />
        </div>
    )
}

export default PaginationContainer;