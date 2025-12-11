import { useState } from 'react'
import { useTokens } from '../stores/tokenStore'
import axios from 'axios'

const Login = () => {
    const { setAccessToken, setRefreshToken } = useTokens()
    const [formData, setFormData] = useState({ email: "", password: "" })

    const handleInputChange = (title, value) => {
        setFormData(prevState => ({
            ...prevState,
            [title]: value
        }))
    }

    const handleLogin = async () => {
        try {
            const { data, statusText } = await axios.post("https://ilkinibadov.com/api/v1/auth/login", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (statusText === "OK") {
                setAccessToken(data.accessToken)
                setRefreshToken(data.refreshToken)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='max-w-[300px] w-full flex flex-col gap-5 p-5 border border-zinc-300'>
            <input value={formData.email} className='border border-zinc-300 p-2' placeholder='Enter your email' onChange={(e)=>{
                handleInputChange("email",e.target.value)
            }} type="email" />

            <input alue={formData.password} className='border border-zinc-300 p-2' placeholder='Enter your password' onChange={(e)=>{
                handleInputChange("password",e.target.value)
            }}  type="password" />
            <button onClick={handleLogin} className="bg-red-500 py-2 text-white cursor-pointer active:scale-95 transition-all duration-200">Login</button>
        </div>
    </div>
  )
}

export default Login