import { ListSubheader } from '@mui/material';

interface NavItemGroupProp {
  subheader?: string;
}
const NavItemGroup = ({ subheader }: NavItemGroupProp) => {
  return <section style={{fontWeight:'bold',padding:'10px'}}>{subheader}</section>;
};

export default NavItemGroup;
