import { Routes, Route } from "react-router-dom"
import Products from "../pages/Products"
import ProductDetails from "../pages/ProductDetails"
import NotFound from "../pages/NotFound"
import UserLayout from "./UserLayout"
import UserAccount from "../pages/UserAccount"
import UserDetails from "../pages/UserDetails"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import { useTokens } from "../stores/tokenStore"

const Navigator = () => {
    const { accessToken } = useTokens()

    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            {accessToken && <Route path="/profile" element={<Profile />} />}
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="users" element={<UserLayout />}>
                <Route path="details" element={<UserDetails />} />
                <Route path="account" element={<UserAccount />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Navigator