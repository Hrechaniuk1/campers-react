import css from './AboutCamper.module.css'

function AboutCamper({data}) {

    return (
        <div>
            <h3>{data.name}</h3>
            <ul>
                <li>
                    <img src="" alt="" />
                    <p>{`${data.rating}(${data.reviews.length} reviews)`}</p>
                </li>
                <li>
                    <img src="" alt="" />
                    <p>{data.location}</p>
                </li>
            </ul>
            <p>{`€ ${data.price.toFixed(2)}`}</p>
            <ul>
                {data.gallery.map(item => (
                    <li key={item.original}><img src={item.original} alt="" /></li>
                ))}
            </ul>
            <p>{data.description}</p>
        </div>
    )

}

export default AboutCamper