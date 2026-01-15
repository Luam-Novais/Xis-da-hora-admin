import { SidebarDataType } from "@/src/types/ui/sidebar";
import { ChartColumn, ShoppingBasket,Tags, Receipt, Settings} from 'lucide-react';
export const sidebarData: SidebarDataType[] = [
  {
    name: 'Dashboard',
    icon: ChartColumn,
    type: 'page',
    url: '/dashboard',
  },
  {
    name: 'Produtos',
    icon: ShoppingBasket,
    type: 'page',
    url: '/products',
  },
  {
    name: 'Categorias',
    icon: Tags,
    type: 'page',
    url: '/category',
  },
  {
    name: 'Pedidos',
    icon: Receipt,
    type: 'page',
    url: '/order',
  },
  {
    name: 'Configurações',
    icon: Settings,
    type: 'page',
    url: '/settings',
  },
];