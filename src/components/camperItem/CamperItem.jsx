import { useDispatch } from 'react-redux'
import { memo } from 'react'

import css from './CamperItem.module.css'
import { changeFavorite, deleteFavorite } from '../../redux/slice'
import Icon from '../Icon'

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
            <div className={css.imgBox}><img className={css.mainImg} src={data.gallery[0].thumb} alt={data.name} /></div>
        <div>
            <div className={css.namePriceBox}>
                <h3 className={css.title}>{data.name}</h3>
                <div className={css.priceBox}>
                <p className={css.price}>{`€ ${data.price.toFixed(2)}`}</p>
                <label className={css.label} >
                <input className={css.input} onChange={changeHandler} checked={isFavorite} type="checkbox" />
                <Icon cl={css.iconHeart} id='icon-heart' width={24} height={20} ></Icon>
                </label>
                </div>
            </div>
            <div>
                <ul className={css.ratingLocation}>
                    <li>
                        <Icon cl={css.iconStar} id='icon-star' width={16} height={16} ></Icon>
                        {`${data.rating}(${data.reviews.length} reviews)`}</li>
                    <li className={css.locationLi}>
                    <Icon cl={css.mapIcon} id='icon-map' width='20' height='20' ></Icon>
                        <p className={css.location}>{data.location}</p></li>
                </ul>
            </div>
            <p className={css.description}>{data.description}</p>
            <ul className={css.futureList}>
                {data?.transmission === 'automatic' ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-diagram' width={20} height={15} ></Icon>Automatic</li> : <></>}
                {data?.AC ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-wind' width={20} height={17} ></Icon>AC</li> : <></>}
                <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-gas' width={20} height={20} ></Icon>Petrol</li>
                {data?.kitchen ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-cup' width={20} height={13} ></Icon>Kitchen</li> : <></>}
                {data?.radio ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-radio' width={19} height={17} ></Icon>Radio</li> : <></>}
                {data?.bathroom ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-droplet' width={15} height={20} ></Icon>Bathroom</li> : <></>}
                <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-people' width={20} height={15} ></Icon>2 adults</li>
            </ul>
            <a className={css.btn} href={`/catalog/${data.id}/futures`} target="_blank" rel="noopener noreferrer">
                Show more
            </a>
        </div>
        </div>
    )

}

export default memo(CamperItem)