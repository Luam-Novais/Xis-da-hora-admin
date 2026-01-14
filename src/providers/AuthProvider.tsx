"use client"
import React, { useEffect } from "react";
import { data_get } from "../utils/fetchOptions";
import { useAuthStore } from "../store/auth.store";
import { IUser } from "../types/user";

export default function AuthProvider({children}: {children:React.ReactNode}){
    const {setUser} = useAuthStore()
    useEffect(()=>{
        async function loadUserData(){
            const {url, options} = data_get('auth/me')
            try {
                   const res = await fetch(url, options as RequestInit);
                   const json: IUser = await res.json();
                   console.log(res, json)
                   if (res.ok) {
                     setUser(json);
                   }
            } catch (error: any) {
                console.error(error.message)
            }
        }
        loadUserData()
    }, [])
    return children
}