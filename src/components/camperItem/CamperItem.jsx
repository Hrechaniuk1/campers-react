import { Link } from 'react-router-dom'
import css from './CamperItem.module.css'

function CamperItem({data}) {

    return (
        <div className={css.container}>
        <div><img src="" alt="" /></div>
        <div>
            <div>
                <h3>{data.name}</h3>
                <p>{data.price}</p>
                <input type="checkbox" />

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
            <Link className={css.btn} to={`/catalog/${data.id}`} >Show more</Link>
        </div>
        </div>
    )

}

export default CamperItem