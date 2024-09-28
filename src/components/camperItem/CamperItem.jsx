import { useDispatch } from 'react-redux'
import { memo } from 'react'

import css from './CamperItem.module.css'
import { changeFavorite, deleteFavorite } from '../../redux/slice'

function CamperItem({data, isFavorite}) {

    const dispatch = useDispatch()

    function changeHandler(event) {
        const isChecked = event.target.checked;
        if(isChecked) {
            dispatch(changeFavorite(data.id))
        } else {
            dispatch(deleteFavorite(data.id))
        }
    }

    return (
        <div className={css.container}>
        <div><img src="" alt="" /></div>
        <div>
            <div>
                <h3>{data.name}</h3>
                <p>{data.price}</p>
                <input onChange={changeHandler} checked={isFavorite} type="checkbox" />

            </div>
            <div>
                <ul>
                    <li><img src={data.gallery[0].original} alt={data.name} /></li>
                    <li><p>{data.rating}</p></li>
                </ul>
            </div>
            <p>{data.description}</p>
            <ul>
                <li>future</li>
            </ul>
            <a className={css.btn} href={`/catalog/${data.id}`} target="_blank" rel="noopener noreferrer">
                Show more
            </a>
        </div>
        </div>
    )

}

export default memo(CamperItem)