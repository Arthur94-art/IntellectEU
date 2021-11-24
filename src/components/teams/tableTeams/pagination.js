import React from "react";
import s from './pagination.module.scss'




const Pagination = () => {




    return (<div className={s.pagination}>
        <div className={s.pagination_firstBlock}>
            <div className={s.pagination_firstBlock__item}>Items per page</div>
            <div className={s.pagination_firstBlock__select}>
                <div className={s.selectBlock}>
                    <select>
                        <option >5</option>
                        <option>10</option>
                        <option>15</option>
                    </select>
                </div>
            </div>
            <div className={s.pagination_firstBlock__displaying}>Displaying 1-20 of 265 items</div>
        </div>
        <div className={s.pagination_secondBlock}>
            <div className={s.pagination_secondBlock__numOfPage}>1 of 27 pages</div>
            <div className={s.pagination_secondBlock__prevBtn}>&#8249;</div>
            <div className={s.pagination_secondBlock__select}>
                <select>
                    <option >1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div className={s.pagination_secondBlock__nextBtn}>&#8250;</div>
        </div>
    </div>)
}

export default Pagination;