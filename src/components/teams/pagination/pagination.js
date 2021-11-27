import React from "react"
import s from './pagination.module.scss'

const Pagination = (props) => {

    return (
        <div className={s.pagination}>
            <div className={s.pagination_firstBlock}>
                <div className={s.pagination_firstBlock__item}>Items per page</div>
                <div className={s.pagination_firstBlock__select}>
                    <div className={s.selectBlock}>
                        <select defaultValue={10} onChange={(e) => {
                            props.setSelectValue(+e.target.value);
                        }}>
                            {props.getArrSelecValue(props.teams,
                                props.meta.current_page,
                                props.meta.total_pages).map((el) => {
                                    return <option value={el} key={el}>{el}</option>
                                })}
                        </select>
                    </div>
                </div>
                <div className={s.pagination_firstBlock__displaying}>
                    Displaying 1-{props.meta.per_page} of {props.meta.total_count} items
                </div>
            </div>
            <div className={s.pagination_secondBlock}>
                <div className={s.pagination_secondBlock__numOfPage}>
                    {props.meta.current_page} of {props.meta.total_pages}  pages
                </div>
                <button className={s.pagination_secondBlock__prevBtn} onClick={(e) => {
                    props.onHandlePrevClcik()


                }} disabled={props.meta.current_page === 1
                    ?
                    true
                    :
                    false
                } >&#8249;</button>
                <div className={s.pagination_secondBlock__select}>
                    <select defaultValue={1} onChange={(e) => {
                        props.setPage(+e.target.value);

                    }}>
                        {props.getArrPerPAges(props.meta.total_pages).map((el) => {
                            return <option key={el} value={el}>{el}</option>
                        })}
                    </select>
                </div>
                <button className={s.pagination_secondBlock__nextBtn}
                    onClick={(e) => {

                        props.onHandleNextClcik();
                    }} disabled={props.meta.current_page === props.meta.total_pages
                        ?
                        true
                        :
                        false
                    }
                >&#8250;</button>
            </div>
        </div>
    )

}

export default Pagination;