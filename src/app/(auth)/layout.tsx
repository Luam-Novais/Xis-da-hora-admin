import React from "react";
import { latoSans, interSans, poppins} from "../layout";

export default function Layout({children}: Readonly<{children: React.ReactNode}>){
    return <div className={`w-full min-h-dvh bg-gray-100 flex justify-center `}>{children}</div>;
}