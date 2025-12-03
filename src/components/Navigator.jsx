import { Routes, Route } from "react-router-dom"
import Products from "../pages/Products"
import ProductDetails from "../pages/ProductDetails"
import NotFound from "../pages/NotFound"
import UserDetails from "../pages/UserDetails"
import UserAccount from "../pages/UserAccount"
import UserLayout from "../components/UserLayout"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import { useTokens } from "../stores/tokenStore"

const Navigator = () => {
  const {accessToken} = useTokens()
  return (
    <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
        {accessToken && <Route path="/profile" element={<Profile/>} />}
        <Route path="/product-details/:id" element={<ProductDetails/>} />


        <Route path="*" element={<NotFound/>} />
        <Route path="users" element={<UserLayout/>}>
            <Route path="details" element={<UserDetails/>}/>
            <Route path="account" element={<UserAccount />}/>
        </Route>

    </Routes>
  )
}

export default Navigator