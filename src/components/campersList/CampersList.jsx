import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import css from './CampersList.module.css'
import CamperItem from '../camperItem/CamperItem'
import { selectCapmers, selectPage, selectFilters, selectTotalPages, selectFavorite } from '../../redux/selectors'
import {changePage, clearItems} from '../../redux/slice.js'
import { fetchAll } from '../../redux/operations.js'



function CampersList() {

    const campers = useSelector(selectCapmers)
    const page = useSelector(selectPage)
    const filters = useSelector(selectFilters)
    const totalPages = useSelector(selectTotalPages)
    const favs = useSelector(selectFavorite)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch, filters, page])

    function clickHandler() {
        dispatch(changePage(page + 1))
    }

    return (
        <div>
            <ul className={css.list}>
            {campers.map(item => {
                const isFavorite = favs.includes(item.id);
                return (<li key={item.id}><CamperItem data={item} isFavorite={isFavorite}></CamperItem></li>)
            })}
            </ul>
            {(totalPages > page) ? <button className={css.loadMore} onClick={clickHandler}>Load more</button> : <></>}
        </div>
    )
}

export default CampersList