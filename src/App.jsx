import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Header from "./components/header/Header"
import Loader from "./components/Loader/Loader";
const MainPage = lazy(() => import('./pages/MainPage/MainPage'))
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'))
const CapmerDetailsPage = lazy(() => import('./pages/CapmerDetailsPage/CapmerDetailsPage'))
const Futures = lazy(() => import('./components/features/Features'))
const Reviews = lazy(() => import('./components/reviews/Reviews'))


function App() {

    return (
        <>
        <Toaster
            position="top-right"
            gutter={8}
            toastOptions={{
            // Define default options
            className: '',
            duration: 1500,
            style: {
             background: '#363636',
             color: '#fff',
                }
            }}
            />
        <Header></Header>
        <Suspense fallback={<Loader></Loader>}>
        <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/catalog" element={<CatalogPage></CatalogPage>}></Route>
            <Route path="/catalog/:id" element={<CapmerDetailsPage></CapmerDetailsPage>}>
                <Route path='futures' element={<Futures></Futures>}></Route>
                <Route path='reviews' element={<Reviews></Reviews>}></Route>
            </Route>
        </Routes>
        </Suspense>
        </>
    )
}

export default App