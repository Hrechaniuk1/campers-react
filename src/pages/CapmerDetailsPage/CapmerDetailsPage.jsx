import { Suspense, useRef } from "react"
import { useParams, Link, Outlet } from "react-router-dom";

import css from './CapmerDetailsPage.module.css'

import AboutCamper from '../../components/aboutCamper/AboutCamper'
import Reviews from '../../components/reviews/Reviews'
import Futures from '../../components/features/Features'
import getOne from "../../fetch/getOne";

function CapmerDetailsPage() {

    return (
        <section>
            <AboutCamper></AboutCamper>
            <ul>
                <li>
                    <Link to='futures'>Futures</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<p className={css.loading}>Loading..</p>}>
                <Outlet></Outlet>
            </Suspense>
        </section>
    )

}

export default CapmerDetailsPage