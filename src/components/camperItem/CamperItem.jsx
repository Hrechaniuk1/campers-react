import css from './CamperItem.module.css'

function CamperItem() {

    return (
        <div className={css.container}>
        <div><img src="" alt="" /></div>
        <div>
            <div>
                <h3>Title</h3>
                <p>Price</p>
                <input type="checkbox" />

            </div>
            <div>
                <ul>
                    <li><img src="" alt="" /></li>
                    <li><p>Review</p></li>
                </ul>
            </div>
            <p>Description</p>
            <ul>
                <li>future</li>
            </ul>
            <a className={css.btn} href="">Show more</a>
        </div>
        </div>
    )

}

export default CamperItem