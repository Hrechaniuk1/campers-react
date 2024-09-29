import css from './AboutCamper.module.css'
import Icon from '../Icon'

function AboutCamper({data}) {

    return (
        <div className={css.about}>
            <h3 className={css.title}>{data.name}</h3>
            <ul className={css.ratingLocation}>
                    <li>
                        <Icon cl={css.iconStar} id='icon-star' width={16} height={16} ></Icon>
                        {`${data.rating}(${data.reviews.length} reviews)`}</li>
                    <li className={css.locationLi}>
                    <Icon cl={css.mapIcon} id='icon-map' width='20' height='20' ></Icon>
                        <p className={css.location}>{data.location}</p></li>
                </ul>
                <p className={css.price}>{`€ ${data.price.toFixed(2).replace('.', ',')}`}</p>
            <ul className={css.imgList}>
                {data.gallery.map(item => (
                    <li className={css.imgBox} key={item.original}><img className={css.img} src={item.original} alt="" /></li>
                ))}
            </ul>
            <p className={css.description}>{data.description}</p>
        </div>
    )

}

export default AboutCamper