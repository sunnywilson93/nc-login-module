import * as React from "react";

const SvgNavback = ({ titleId = 'nav-back', ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    <path
      d="M11.001 1 1 10.002l10.001 9.002"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgNavback;
