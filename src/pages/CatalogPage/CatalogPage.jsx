import css from './CatalogPage.module.css'

import CampersList from '../../components/campersList/CampersList'
import SearchForm from '../../components/searchForm/SearchForm'
import getAll from '../../fetch/getAll'

function CatalogPage() {

    return (
        <section className={css.page}>
        <SearchForm></SearchForm>
        <CampersList></CampersList>
        </section>
    )

}

export default CatalogPage