export default ({ setCurrentBackground, setLogoVisible }) => next => {
  setLogoVisible(next <= 2);
  setCurrentBackground(Math.floor((next - 1) / 3));
};
