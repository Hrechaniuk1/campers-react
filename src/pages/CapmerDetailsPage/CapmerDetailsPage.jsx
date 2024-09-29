import { Suspense, useRef } from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
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
      (!loading && item && !error)?  <section className={css.section}>
            <AboutCamper data={item}></AboutCamper>
            <ul className={css.linkList}>
                <li>
                    <NavLink className={({ isActive }) => isActive ? css.active : undefined} to='futures'>Futures</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? css.active : undefined} to='reviews'>Reviews</NavLink>
                </li>
            </ul>
            <div className={css.outletFormBox}>
            <Suspense fallback={<p className={css.loading}>Loading..</p>}>
            <Outlet context={{ data: item }} />
            </Suspense>
            <RegistrationForm data={id}></RegistrationForm>
            </div>

        </section> : <p>Loading...</p>
    )

}

export default CapmerDetailsPage