import { useOutletContext } from 'react-router-dom';

import css from './Reviews.module.css'

function Reviews() {

    const { data } = useOutletContext();

    return (
        <ul>
            {data.reviews.map(item => (
                <li key={item.reviewer_name + 'keyRev'}>
                <div>
                <img src="" alt="" /> 
                <p>{item.reviewer_name}</p> 
                <ul></ul> 
                </div>
                <p>{item.comment}</p>
            </li>
            ))}
        </ul>
    )

}

export default Reviews