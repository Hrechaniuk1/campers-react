import { useOutletContext } from 'react-router-dom';

import css from './Reviews.module.css'
import Icon from '../Icon'

function Reviews() {

    const { data } = useOutletContext();

    return (
        <ul className={css.reviewContainer}>
            {data.reviews.map(item => 
                {
                    const letter = item.reviewer_name.charAt(0).toUpperCase();
                
                return <li key={item.reviewer_name + 'keyRev'}>
                <div className={css.userInfo}>
                <div className={css.ava}>
                    {letter}
                </div>
                <div className={css.nameRateBox}>
                <p>{item.reviewer_name}</p> 
                <ul className={css.starBox}>
                <li><Icon cl={data.rating >= 1 ? css.iconStar : css.iconStarNot} id='icon-star' width={16} height={16} ></Icon></li>
                <li><Icon cl={data.rating >= 2 ? css.iconStar : css.iconStarNot} id='icon-star' width={16} height={16} ></Icon></li>
                <li><Icon cl={data.rating >= 3 ? css.iconStar : css.iconStarNot} id='icon-star' width={16} height={16} ></Icon></li>
                <li><Icon cl={data.rating >= 4 ? css.iconStar : css.iconStarNot} id='icon-star' width={16} height={16} ></Icon></li>
                <li><Icon cl={data.rating >= 5 ? css.iconStar : css.iconStarNot} id='icon-star' width={16} height={16} ></Icon></li>    
                </ul> 
                </div>
                </div>
                <p className={css.description}>{item.comment}</p>
            </li>}
            
            )}
        </ul>
    )

}

export default Reviews