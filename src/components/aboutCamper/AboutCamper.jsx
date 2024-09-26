import css from './AboutCamper.module.css'

function AboutCamper({data}) {

    return (
        <div>
            <h3>{data.name}</h3>
            <ul>
                <li>
                    <img src="" alt="" />
                    <p>Reviews</p>
                </li>
                <li>
                    <img src="" alt="" />
                    <p>Location</p>
                </li>
            </ul>
            <p>Price</p>
            <ul>

            </ul>
            <p>description</p>
        </div>
    )

}

export default AboutCamper