import { SvgIcon, SvgIconProps } from '@mui/material';

const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_114_1066)">
      <path d="M13.125 13.125L16.5 16.5" stroke="#B5B5B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 8.25C15 4.52208 11.978 1.5 8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.978 4.52208 15 8.25 15C11.978 15 15 11.978 15 8.25Z" stroke="#B5B5B5" strokeWidth="1.5" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_114_1066">
      <rect width="18" height="18" fill="white"/>
      </clipPath>
      </defs>
      </svg>

    </SvgIcon>
  );
};

export default SearchIcon;
