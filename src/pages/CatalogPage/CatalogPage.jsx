import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'


import css from './CatalogPage.module.css'
import CampersList from '../../components/campersList/CampersList'
import SearchForm from '../../components/searchForm/SearchForm'
import { selectCapmers, selectPage, selectFilters, selectTotalPages, selectFavorite, selectLoading } from '../../redux/selectors'
import { fetchAll } from '../../redux/operations.js'
import { changePage } from '../../redux/slice.js'
import Loader from '../../components/Loader/Loader'

function CatalogPage() {

    const loading = useSelector(selectLoading)

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
       !loading ? <section className={css.page}>
        <SearchForm></SearchForm>
        <CampersList totalPages={totalPages} page={page} clickHandler={clickHandler} campers={campers} favs={favs}></CampersList>
        </section> : <Loader></Loader>
    )

}

export default CatalogPage