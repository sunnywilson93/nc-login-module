// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx,md,mdx}'],
  theme: {
    animation: {
      'spin-slow': 'spin 1.5s linear infinite'
    },
    extend: {
      colors: {
        primary: '#60A744',
        secondary: '#3163E7',
        outlined: 'rgba(20, 31, 60, 0.7)',
        disabled: '#C4C4C4',
        lightGray: '#E5E5E5',
        link: '#2129ED'
      },
      height: {
        default: '40px !important',
        medium: '50px !important',
        lg: '60px',
        sm: '20px',
        content: 'calc(100vh - 120px)',
        header: '40px !important',
        footer: '80px'
      }
    }
  }
};
