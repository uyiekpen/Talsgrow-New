import { RiDashboardLine, RiGiftLine, RiCustomerService2Fill, RiMessage2Line, RiSettings2Fill } from 'react-icons/ri';
import { MdOutlineInventory } from 'react-icons/md';

// Define the type for your navigation link data.
type NavigationLink = {
  id: number;
  title: string;
  icon: JSX.Element;
};


// Navigation links data
export const navigationLinks: NavigationLink[] = [
  { id: 1, title: "Home", icon: <RiDashboardLine /> },
  { id: 2, title: "Orders", icon: <RiGiftLine /> },
  { id: 3, title: "Customers", icon: <RiCustomerService2Fill /> },
  { id: 4, title: "Inventory", icon: <MdOutlineInventory /> },
  { id: 5, title: "Conversations", icon: <RiMessage2Line /> },
  { id: 6, title: "Settings", icon: <RiSettings2Fill /> },
];

