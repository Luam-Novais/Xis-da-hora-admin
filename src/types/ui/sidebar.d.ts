import { Sidebar } from "@/src/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

export type SidebarType = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
};

export type SidebarDataType = {
    name: string;
    icon: LucideIcon;
    type: "page" | "submenu"
    url: string
}