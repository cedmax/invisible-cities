import memoize from "memoize-one";

const setLogoMemo = setLogoVisible => (current, next) => {
  if (current === 2 && next === 3) {
    setLogoVisible(false);
  }
  if (current === 3 && next === 2) {
    setLogoVisible(true);
  }
};

const setBackgroundMemo = setCurrentBackground => (current, next) => {
  if (current % 3 === 0 && next > current) {
    setCurrentBackground(current / 3);
  }

  if (next % 3 === 0 && next < current) {
    setCurrentBackground(next / 3 - 1);
  }
};

export default ({ setCurrentBackground, setCurrentPage, setLogoVisible }) => (
  current,
  next
) => {
  const setLogo = memoize(setLogoMemo(setLogoVisible));
  setLogo(current, next);

  const setBackground = memoize(setBackgroundMemo(setCurrentBackground));
  setBackground(current, next);
  setCurrentPage(next);
};
