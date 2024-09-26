import { Link } from 'react-router-dom'
import css from './Banner.module.css'


function Banner() {

    return (
        <section className={css.main} >
            <div>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.description}>You can find everything you want in our catalog</p>
            </div>
            <Link className={css.btn} to='/catalog'>View Now</Link>
        </section>
    )

}

export default Banner