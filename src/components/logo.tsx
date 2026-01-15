import Image from "next/image"
export default function Logo({height, width} : {height: number, width: number}){
    return  <Image src={'/logo.svg'} alt='logo' height={height} width={width}/>
}