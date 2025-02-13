import { SvgIcon, SvgIconProps } from '@mui/material';

const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.00001 6.12602H14.6562C16.4996 6.12602 17.4213 6.12601 18.0834 6.56854C18.37 6.76011 18.6162 7.00627 18.8076 7.29298C19.2322 7.92852 19.2493 8.8032 19.25 10.5023V11.3775M10.5 6.12602L9.94578 5.01718C9.48658 4.09855 9.06693 3.17389 8.04936 2.79218C7.60367 2.625 7.09453 2.625 6.07625 2.625C4.48683 2.625 3.69212 2.625 3.09581 2.95788C2.67074 3.19516 2.31999 3.546 2.08278 3.9712C1.75 4.56768 1.75 5.36262 1.75 6.9525V9.62701C1.75 13.753 1.75 15.816 3.03141 17.0978C4.11713 18.1838 5.76352 18.3497 8.75 18.375"
          stroke="#213555"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M14.875 18.375C17.2912 18.375 19.25 15.75 19.25 15.75C19.25 15.75 17.2912 13.125 14.875 13.125C12.4588 13.125 10.5 15.75 10.5 15.75C10.5 15.75 12.4588 18.375 14.875 18.375Z"
          stroke="#213555"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M14.8887 15.7517H14.8965"
          stroke="#213555"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default SearchIcon;
