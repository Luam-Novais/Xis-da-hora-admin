import { SidebarProvider } from "@/src/components/ui/sidebar";

export default function LayoutAdmin({children} : Readonly<{children: React.ReactNode}>){
    return(
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}