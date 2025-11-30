import Card from "../components/Card"
import Loading from "../components/Loading"
import {useState, useEffect} from "react"

const Products = () => {
    const [loading,setLoading] = useState(false)
    const [searchterm,setSearchterm] = useState("")
    const [products,setProducts] = useState([])

    const getProducts = async () => {
        try {
            setLoading(true);
            const url =
            searchterm.length >= 3
                ? `https://ilkinibadov.com/api/v1/search?searchterm=${searchterm}`
                : "https://ilkinibadov.com/api/v1/products";

            const res = await fetch(url);

            if (res.ok) {
            const data = await res.json();
            setProducts(searchterm.length >= 3 ? data.content : data.products);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getProducts()
    }, [searchterm])

    return (
        <>
            <div className="w-full flex justify-center py-5">
                <input className=" border border-zinc-300 p-3 min-w-[300px]" placeholder="Search for any product..." type="text" value={searchterm} onChange={(e)=>{
                setSearchterm(e.target.value)
                }} />
            </div>
            {
                loading ? <Loading/>:
                <div className="w-full min-h-screen h-fit grid grid-cols-4 gap-5 p-5">
                    {products.map(product => <Card key={product._id} product={product}/>)}
                </div>
            }
        </>
    )
}

export default Products