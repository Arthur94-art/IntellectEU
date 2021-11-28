import React from "react";
import Pagination from "./pagination";



const PaginationContainer = (props) => {

    const onHandleNextClcik = () => {
        props.setPage(props.page + 1);
    }
    const onHandlePrevClcik = () => {
        props.setPage(props.page - 1);
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
                selectValue={props.selectValue} setSelectValue={props.setSelectValue}
                onHandleNextClcik={onHandleNextClcik}
                onHandlePrevClcik={onHandlePrevClcik}
                meta={props.meta}
                getArrPerPAges={getArrPerPAges}
                setPage={props.setPage}
                page={props.page}
                teams={props.teams}
                getArrSelecValue={getArrSelecValue}
            />
        </div>
    )
}

export default PaginationContainer;