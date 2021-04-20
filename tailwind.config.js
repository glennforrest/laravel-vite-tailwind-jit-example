module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './resources/**/*.{js,jsx,ts,tsx,vue,blade.php}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
