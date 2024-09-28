import { useOutletContext } from 'react-router-dom';

import css from './Reviews.module.css'

function Reviews() {

    const { data } = useOutletContext();

    return (
        <ul>
            {data.reviews.map(item => 
                {
                    const letter = item.reviewer_name.charAt(0).toUpperCase();
                
                return <li key={item.reviewer_name + 'keyRev'}>
                <div>
                <div>
                    {letter}
                </div>
                <p>{item.reviewer_name}</p> 
                <ul></ul> 
                </div>
                <p>{item.comment}</p>
            </li>}
            
            )}
        </ul>
    )

}

export default Reviews