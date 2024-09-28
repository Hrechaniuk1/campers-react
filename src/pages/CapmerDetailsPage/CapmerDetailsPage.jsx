import { Suspense, useRef } from "react"
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import css from './CapmerDetailsPage.module.css'

import AboutCamper from '../../components/aboutCamper/AboutCamper'
import Reviews from '../../components/reviews/Reviews'
import Futures from '../../components/features/Features'
import getOne from "../../fetch/getOne";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import { selectError, selectLoading } from "../../redux/selectors";
import { changeError, changeLoading } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";

function CapmerDetailsPage() {
    const [item, setItem] = useState()
    const error = useSelector(selectError)
    const loading = useSelector(selectLoading)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        async function getInfo() {
            try {
            dispatch(changeLoading(true))
            const response = await getOne(id)
            setItem(response)
            } catch {
                dispatch(changeError(true))
            } finally {
                dispatch(changeLoading(false))
            }
        }
        getInfo()
    }, [dispatch])

    return (
      (!loading && item && !error)?  <section>
            <AboutCamper data={item}></AboutCamper>
            <ul>
                <li>
                    <Link to='futures'>Futures</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<p className={css.loading}>Loading..</p>}>
            <Outlet context={{ data: item }} />
            </Suspense>
            <RegistrationForm data={id}></RegistrationForm>

        </section> : <p>Loading...</p>
    )

}

export default CapmerDetailsPage