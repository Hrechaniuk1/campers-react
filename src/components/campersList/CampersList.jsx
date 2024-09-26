import { useSelector, useDispatch } from 'react-redux'

import css from './CampersList.module.css'
import CamperItem from '../camperItem/CamperItem'
import { selectCapmers, selectPage, selectFilters } from '../../redux/selectors'
import {changePage} from '../../redux/slice.js'
import { fetchAll, fetchPaginationAll } from '../../redux/operations.js'
import { useEffect } from 'react'

function CampersList() {

    const campers = useSelector(selectCapmers)
    const page = useSelector(selectPage)
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchAll())
      }, [dispatch, filters])
    
    useEffect(() => {
        dispatch(fetchPaginationAll())
    }, [dispatch, page])

    function clickHandler() {
        dispatch(changePage(page + 1))
    }

    return (
        <div>
            <ul className={css.list}>
            {campers.map(item => {
                return (<li key={item.id}><CamperItem data={item}></CamperItem></li>)
            })}
            </ul>
            <button className={css.loadMore} onClick={clickHandler}>Load more</button>
        </div>
    )
}

export default CampersList