import { useEffect , useState } from 'react'
import { useTokens } from '../stores/tokenStore'


const Profile = () => {
  const [user, setUser]= useState({})
  const {accessToken} = useTokens()


  const getUserInfo = async () => {
    try{
        const res = await fetch("https://ilkinibadov.com/api/v1/auth/me",{
            headers:{
                "Authorization": `Bearer ${accessToken}`
            }
        })

        if(res.ok){
            const data = await res.json()
            setUser(data)
        }
    }catch(error){
        console.error(error)
    }
  }

  useEffect(() => {
    getUserInfo()
  },[])

  return (
    <div className='w-full h-screen flex justify-center items-center'>{user.email}</div>
  )
}

export default Profile