import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFounded from "../pages/not-founded/NotFounded"
const Home = lazy(() => import("../pages/home/Home"))
const ProductDetails = lazy(() => import("../pages/product-details/ProductDetails"))

const BrowserRoutes = {
    home: "/",
    productDetails: "/product",
    notFounded: "*"
}

const RoutesPage = () => {
    return (<Suspense fallback={<>Loading</>}>
        <BrowserRouter>
            <Routes>
                <Route path= {BrowserRoutes.home} element= {<Home/>}/>
                <Route path= {BrowserRoutes.productDetails} element= {<ProductDetails/>}/>
                <Route path= {BrowserRoutes.notFounded} element= {<NotFounded/>}/>
            </Routes>
        </BrowserRouter>
    </Suspense>)
}

export default RoutesPage