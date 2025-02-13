import { SvgIcon, SvgIconProps } from '@mui/material';

const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="42"
        height="38"
        viewBox="0 0 42 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.2682 28.0336L41 1M32.095 1L21.7476 20.573C20.4782 22.9742 19.6912 23.298 17.0696 22.498C13.7216 21.4762 7.0283 17.9372 3.69512 19.4846C0.360998 21.0324 0.0802183 31.3562 3.0769 33.4722C6.43258 35.8416 16.3735 34.9874 20.5922 34.0206"
          stroke="#0084FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M13 21L9 35" stroke="#0084FF" stroke-width="1.5" stroke-linejoin="round" />
        <path
          d="M21 33C21 29.6906 21.6906 29 25 29H33C36.3094 29 37 29.6906 37 33C37 36.3094 36.3094 37 33 37H25C21.6906 37 21 36.3094 21 33Z"
          stroke="#0084FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default SearchIcon;
