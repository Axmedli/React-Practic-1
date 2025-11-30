import { useParams, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({})
    const location = useLocation()
    const { isProduct } = location.state
    const { id } = useParams()

    const getProductDetails=async()=>{
        try{
            const res = await fetch(`https://ilkinibadov.com/api/v1/products/${id}/details`)
            if(res.ok){
                const data = await res.json()
                setProductDetails(data)
            }
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        console.log(isProduct)
        getProductDetails()
    }, [id])

    return (
        <div className='w-full h-screen flex justify-center items-center'>{productDetails.title}</div>
    )
}

export default ProductDetails