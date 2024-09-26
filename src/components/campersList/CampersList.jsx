import css from './CampersList.module.css'

function CampersList() {
    return (
        <div>
            <ul className={css.list}>

            </ul>
            <button className={css.loadMore}>Load more</button>
        </div>
    )
}

export default CampersList