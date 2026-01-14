import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
interface Input {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
};
interface InputPassword extends Input{
  children?: React.ReactNode
  state?: boolean
}
export  function Input({ label, type, placeholder, register }: Input) {
  return (
    <span className="flex flex-col gap-2">
      <label className="block" htmlFor="">
        {label}
      </label>
      <input type={type} {...register} className="border border-gray-400 rounded-sm p-1 text-sm w-full shadow bg-gray-100 py-1.5 px-2" placeholder={placeholder} />
    </span>
  );
}
export  function InputPassword({state, label, children,  register }: InputPassword) {
  return (
    <span className="flex flex-col gap-2 ">
      <label className="block" htmlFor="">
        {label}
      </label>
      <span className="relative">
        <input type={state? 'password' :'text'} {...register} className="border border-gray-400 rounded-sm p-1 text-sm w-full shadow bg-gray-100 py-1.5 px-2" />
        <span className="absolute top-1/2 -translate-1/2 right-2">{children}</span>
      </span>
    </span>
  );
}


