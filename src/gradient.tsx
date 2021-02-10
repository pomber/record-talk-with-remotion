export function Gradient({ children, ...props }) {
  return (
    <div {...props} style={{ position: "relative", ...props.style }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 650 330"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -5,
          borderRadius: 6,
        }}
        preserveAspectRatio="none"
      >
        <g>
          <g filter="url(#filter0_f)">
            <ellipse
              cx="488.5"
              cy="165"
              fill="url(#paint0_linear)"
              rx="262.5"
              ry="266"
            ></ellipse>
          </g>
          <g filter="url(#filter1_f)">
            <ellipse
              cx="361.873"
              cy="165"
              fill="url(#paint1_linear)"
              rx="217.333"
              ry="220"
            ></ellipse>
          </g>
          <g filter="url(#filter2_f)">
            <ellipse
              cx="161.5"
              cy="165"
              fill="url(#paint2_linear)"
              rx="247.5"
              ry="250"
            ></ellipse>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f"
            width="633.485"
            height="640.485"
            x="171.758"
            y="-155.242"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur"
              stdDeviation="27.121"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter1_f"
            width="543.152"
            height="548.485"
            x="90.298"
            y="-109.242"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur"
              stdDeviation="27.121"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter2_f"
            width="603.485"
            height="608.485"
            x="-140.242"
            y="-139.242"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur"
              stdDeviation="27.121"
            ></feGaussianBlur>
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="751"
            x2="226"
            y1="165"
            y2="165"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#53A0EC"></stop>
            <stop offset="1" stopColor="#57C84F"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="144.54"
            x2="579.207"
            y1="165"
            y2="165"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFBC29"></stop>
            <stop offset="1" stopColor="#EADF58"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="-86"
            x2="409"
            y1="165"
            y2="165"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC6193"></stop>
            <stop offset="1" stopColor="#EC4B31"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="272.333"
            x2="254.58"
            y1="219.47"
            y2="219.47"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#53A0EC"></stop>
            <stop offset="1" stopColor="#57C84F"></stop>
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="236.828"
            x2="254.58"
            y1="219.47"
            y2="219.47"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFBC29"></stop>
            <stop offset="1" stopColor="#EADF58"></stop>
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="219.075"
            x2="236.828"
            y1="219.47"
            y2="219.47"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC6193"></stop>
            <stop offset="1" stopColor="#EC4B31"></stop>
          </linearGradient>
          <clipPath id="clip0">
            <path
              fill="#fff"
              d="M0 0H11.835V11.835H0z"
              transform="translate(222.034 213.553)"
            ></path>
          </clipPath>
        </defs>
      </svg>
      <div
        style={{
          height: "100%",
          padding: "4px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
}
