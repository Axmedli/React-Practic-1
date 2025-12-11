import { Link } from "react-router-dom"
import {useState} from "react"

const Card = ({ product }) => {
    const [count,setCount] = useState(0)
    const isProduct = true

    return (
      <Link className="min-w-[300px] w-full" to={`/product-details/${product._id}`} state={{isProduct}}>
        <div className="relative w-full h-full border border-gray-300 p-4 rounded-lg shadow-lg">
          <img className="w-full h-[200px] object-contain" src={product.image? product.image : product.images[0]} alt="" />
          <h2 className="text-2xl font-semibold mt-3">{product.title}</h2>
          <p className="my-4">{product.description}</p>
          <p className="text-red-600 font-medium">{product.currency}{product.price}</p>

          <div className="flex justify-end">
            <button onClick={(e)=>{
              e.preventDefault()
              e.stopPropagation()
              if(count>0){
                setCount(prevState=> prevState-1)
              }
            }} className="bg-red-600 px-3 text-2xl text-white cursor-pointer">
              <p>-</p>
            </button>
            <p className="px-3 text-2xl">{count}</p>
            <button onClick={(e)=>{
              e.preventDefault()
              e.stopPropagation()
              setCount(prevState=> prevState+1)
            }} className="bg-green-600 px-3 text-2xl text-white cursor-pointer">
              <p>+</p>
            </button>
        
          </div>
        </div>
    </Link>
    )
}

export default Card