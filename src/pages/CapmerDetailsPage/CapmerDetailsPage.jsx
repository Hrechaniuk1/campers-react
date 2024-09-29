import { Suspense, useRef } from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {toast} from 'react-hot-toast' 


import css from './CapmerDetailsPage.module.css'

import AboutCamper from '../../components/aboutCamper/AboutCamper'
import getOne from "../../fetch/getOne";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import { selectLoading } from "../../redux/selectors";
import { changeLoading } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

function CapmerDetailsPage() {
    const [item, setItem] = useState()
    const loading = useSelector(selectLoading)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        async function getInfo() {
            try {
            dispatch(changeLoading(true))
            const response = await getOne(id)
            setItem(response); 
            } catch {
                toast('Oops, try again', { style: {backgroundColor: 'red'}})
            } finally {
                dispatch(changeLoading(false))
            }
        }
        getInfo()
    }, [dispatch, id])

    return (
      (!loading && item)?  <section className={css.section}>
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
            <Suspense fallback={<Loader></Loader>}>
            <Outlet context={{ data: item }} />
            </Suspense>
            <RegistrationForm data={id}></RegistrationForm>
            </div>

        </section> : <Loader></Loader>
    )

}

export default CapmerDetailsPage