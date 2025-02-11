import { SvgIcon, SvgIconProps } from '@mui/material';

const PlusIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99998 2.33325V11.6666M11.6666 6.99992H2.33331" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </SvgIcon>
  );
};

export default PlusIcon;
