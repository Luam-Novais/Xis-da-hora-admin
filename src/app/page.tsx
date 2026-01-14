'use client'
import { useAuthStore } from "../store/auth.store"

export default function Home(){
  const {user} = useAuthStore()
  return(
    <h1>{user?.name}</h1>
  )
}