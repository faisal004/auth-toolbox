"use client"
import { useCurrentUser } from '@/hooks/use-current-user'
import { signOut, useSession } from 'next-auth/react'

const SettingsPage = () => {
  const user =  useCurrentUser()
  const onClick=()=>{
    signOut()
  }
  return (
    <div className='bg-white p-10 rounded-xl'>
     
     
        <button onClick={onClick} type="submit">Sign Out</button>
     
    </div>
  )
}

export default SettingsPage