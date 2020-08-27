module.exports = {
  extends: '@snowpack/app-scripts-react',
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
  ],
  alias: {
    src: './src',
  },
};
