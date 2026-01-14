'use client';
import {Input, InputPassword }from '@/src/components/ui/input';
import {Button} from '@/src/components/ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { DataLogin } from '@/src/types/form';
import { useAuthStore } from '@/src/store/auth.store';
import { useState } from 'react';
import {SpinnerWithButton} from '@/src/components/ui/spinner';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { loginService } from '@/src/service/auth.services';
import { jwtDecode } from 'jwt-decode';
import { IUserJWTPayload } from '@/src/types/user';



export default function Login() {
  const { register, handleSubmit } = useForm<DataLogin>();
  const {setUser} = useAuthStore()
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string| null>(null);
  const router = useRouter()

  const onSubmit : SubmitHandler<DataLogin> = async (data)=>{
   try{
    setLoading(true)
     const {res, json} = await loginService(data);
     console.log(res,json)
     if (res.ok){
       const decode = jwtDecode(json.acessToken!)
       router.push('/')
     }
    else {
        setError(json.messageError!);
    }
   }catch(error){
    console.error(error)
   }finally{
    setLoading(false)
   }
}
  return (
    <div className="bg-white w-1/3 h-fit m-4 flex flex-col shadow-2xl rounded-xl px-4 py-10 gap-6">
      <Image src="./logo.svg" alt="Logo do sistema" width={50} height={50} />
      {error && <p className="text-red-600">{error}</p>}
      <h1 className="text-3xl font-body">Entrar</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <Input type="email" placeholder="m@exemplo.com" label="Email" register={{ ...register('identifier') }} />
        <InputPassword state={showPassword}label="Senha" register={{ ...register('password') }}>
          {<p onClick={() => setShowPassword(!showPassword)}>{showPassword ? <Eye size={18} color="gray" /> : <EyeOff size={18} color="gray" />}</p>}
        </InputPassword>
        <Link href="/" className="text-right">
          Esqueceu sua senha ?
        </Link>
        <Button>Entrar {loading ? <SpinnerWithButton /> : ''}</Button>
      </form>
    </div>
  );
}
