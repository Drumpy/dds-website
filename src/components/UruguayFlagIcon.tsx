function UruguayFlagIcon() {
  return (
    <svg
      width="16"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-sm"
    >
      <mask
        id="a"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12h16V0H0z"
          fill="#F7FCFF"
        />
        <mask
          id="b"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v12h16V0H0z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#2E42A5"
            d="M0 2h16v1H0zm0 2h16v1H0zm0 2h16v1H0zm0 2h16v1H0zm0 2h16v1H0z"
          />
          <path fill="#F7FCFF" d="M0 0h8v7H0z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.614 5.519s-.511 1.059-.96 1.276c.194-.486.265-1.477.265-1.477s-1.166.462-1.575.378c.492-.344 1.175-.98 1.175-.98s-1.51-.494-1.472-.704C2.728 4.134 3.665 4 3.665 4s-1.059-1.27-.951-1.364c.16.157 1.43.82 1.43.82s.092-1.13.365-1.511c.033.269.416 1.486.416 1.486s.77-.77 1.198-.77c-.188.232-.633 1.255-.633 1.255s1.109-.018 1.53.19c-.51.073-1.405.521-1.405.521s1.165.884 1.059 1.068a5.166 5.166 0 00-1.348-.408s.2 1.23.038 1.507c-.158-.41-.75-1.276-.75-1.276z"
            fill="#FFD018"
            stroke="#F19900"
            strokeOpacity=".98"
            strokeWidth=".25"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.547 4.946a.5.5 0 100-1 .5.5 0 000 1z"
            fill="#FFD018"
            stroke="#F19900"
            strokeOpacity=".98"
            strokeWidth=".25"
          />
        </g>
      </g>
    </svg>
  );
}

export default UruguayFlagIcon;
