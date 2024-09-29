
import css from './CampersList.module.css'
import CamperItem from '../camperItem/CamperItem'

function CampersList({totalPages, page, clickHandler, favs, campers}) {

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