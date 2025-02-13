/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvgIconProps } from '@mui/material';
import DashboardIcon from 'components/icons/menu-icons/Dashboard';
import MasterscheduleIcon from 'components/icons/menu-icons/Masterschedule';
import ABCIcon from 'components/icons/menu-icons/ABC';
import IceSlotIcon from 'components/icons/menu-icons/IceSlot';
import HomeIceIcon from 'components/icons/menu-icons/Homeice';
import TeamStatsIcon from 'components/icons/menu-icons/TeamStats';
import SurveryIcon from 'components/icons/menu-icons/Survery';
import LeagueIcon from 'components/icons/menu-icons/League';
import SeasonsIcon from 'components/icons/menu-icons/Seasons';
import DivisionIcon from 'components/icons/menu-icons/Division';
import ConferenceIcon from 'components/icons/menu-icons/Conference';
import ArenaIcon from 'components/icons/menu-icons/Arena';
import TeamsIcon from 'components/icons/menu-icons/Teams';
import UsersIcon from 'components/icons/menu-icons/Users';


import { uniqueId } from 'lodash';

export interface IMenuitems {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  href?: string;
  children?: IMenuitems[];
  chip?: string;
  chipColor?: string | any;
  variant?: string | any;
  available?: boolean;
  level?: number;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

const Menuitems: IMenuitems[] = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: DashboardIcon,
    href: '/',
    available: true,
  },
  {
    navlabel: true,
    subheader: 'Schedule Management',
  },
  {
    id: uniqueId(),
    title: 'Master Scheduler',
    icon: MasterscheduleIcon,
    href: '#!',
    // chip: '16',
    // chipColor: 'secondary',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'ABC',
    icon:  ABCIcon,
    href: 'abc',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Ice Slot',
    icon: IceSlotIcon,
    href: 'ice-slot',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Home Ice',
    icon: HomeIceIcon,
    href: 'home-ice',
    available: true,
  },
  {
    id: uniqueId(),
    title:'Team Stats',
    icon: TeamStatsIcon,
    href: 'team-stats',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Survey',
    icon: SurveryIcon,
    href: 'survey',
    available: true,
  },
  {
    navlabel: true,
    subheader: 'League Management',
  },
  {
    id: uniqueId(),
    title: 'Leagues',
    icon: LeagueIcon,
    href: 'leagues',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Seasons',
    icon: SeasonsIcon,
    href: 'seasons',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Divisions',
    icon: DivisionIcon,
    href: 'divisions',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Conference',
    icon: ConferenceIcon,
    href: 'conference',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Arena/Facilities',
    icon: ArenaIcon,
    href: 'arena',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Teams',
    icon: TeamsIcon,
    href: 'teams',
    available: true,
  },
  {
    navlabel: true,
    subheader: 'User Management',
  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: UsersIcon,
    href: '#!',
    available: true,
  },
  // {
  //   id: uniqueId(),
  //   title: 'Products',
  //   icon: ProductsIcon,
  //   href: '#!',
  //   available: false,
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Categories',
  //   icon: CategoriesIcon,
  //   href: '#!',
  //   available: false,
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Customers',
  //   icon: CustomersIcon,
  //   href: '#!',
  //   available: false,
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Reports',
  //   icon: ReportsIcon,
  //   href: '#!',
  //   available: false,
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Coupons',
  //   icon: CouponsIcon,
  //   href: '#!',
  //   available: false,
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Inbox',
  //   icon: InboxIcon,
  //   href: '#!',
  //   available: false,
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Authentication',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Sign Up',
  //   icon: SignUpIcon,
  //   href: '/authentication/sign-up',
  //   available: true,
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Sign In',
  //   icon: SignInIcon,
  //   href: '/authentication/login',
  //   available: true,
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Forgot Password',
  //   icon: ForgotPasswordIcon,
  //   href: '/authentication/forgot-password',
  //   available: true,
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Reset Password',
  //   icon: ResetPasswordIcon,
  //   href: '/authentication/reset-password',
  //   available: true,
  // },

  // {
  //   navlabel: true,
  //   subheader: 'Settings',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Personal Settings',
  //   icon: PersonalSettingsIcon,
  //   href: '/settings/#!',
  //   available: false,
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Global Settings',
  //   icon: GlobalSettingsIcon,
  //   href: '/settings/#!',
  //   available: false,
  // },
];

export default Menuitems;
