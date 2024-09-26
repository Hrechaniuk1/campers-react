import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header"
const MainPage = lazy(() => import('./pages/MainPage/MainPage'))
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'))
const CapmerDetailsPage = lazy(() => import('./pages/CapmerDetailsPage/CapmerDetailsPage'))
const Futures = lazy(() => import('./components/features/Features'))
const Reviews = lazy(() => import('./components/reviews/Reviews'))


function App() {

    return (
        <>
        <Header></Header>
        <Suspense fallback={<p>Loading...</p>}>
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