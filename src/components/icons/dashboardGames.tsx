import { SvgIcon, SvgIconProps } from '@mui/material';

const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 19H37" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" />
        <path
          d="M24 6C24 8.76142 21.7614 11 19 11C16.2386 11 14 8.76142 14 6C14 3.23858 16.2386 1 19 1C21.7614 1 24 3.23858 24 6Z"
          stroke="#FF0000"
          stroke-width="1.5"
        />
        <path
          d="M24 32C24 34.7614 21.7614 37 19 37C16.2386 37 14 34.7614 14 32C14 29.2386 16.2386 27 19 27C21.7614 27 24 29.2386 24 32Z"
          stroke="#FF0000"
          stroke-width="1.5"
        />
      </svg>
    </SvgIcon>
  );
};

export default SearchIcon;
