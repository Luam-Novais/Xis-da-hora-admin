import { Eye, EyeOff } from 'lucide-react';
export function Button({ children }: { children: React.ReactNode }) {
  return <button className="bg-amber-500 text-white flex justify-center items-center gap-2 rounded-sm px-12 py-2 cursor-pointer place-self-start shadow ">{children}</button>;
}
export function ButtonShowPassword(value: boolean) {
  return <button>{value ? <Eye size={18} color='gray-400' /> : <EyeOff size={18} />}</button>;
}
