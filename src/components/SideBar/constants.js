import CarIcon from '../../assets/Vector.png';
import DashboardIcon from '../../assets/dashboard.png';
import LogoutIcon from '../../assets/Line.png';
import SettingsIcon from '../../assets/dashboard.png';

export const sidebarTopItems = [
  {
    icon: DashboardIcon,
    label: 'Dashboard',
    to: '/',
  },
  {
    icon: CarIcon,
    label: 'Cars',
    to: '/search',
  },
];

export const sidebarBottomItems = [
  {
    icon: SettingsIcon,
    label: 'Settings',
    to: '/Settings',
  },
  {
    icon: LogoutIcon,
    label: 'Logout',
    to: '/logout',
  },
];
