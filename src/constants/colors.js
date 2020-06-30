export default {
  red: (op = 1) => `rgba(191, 46, 33, ${op})`,
  black: (op = 1) => `rgba(51, 51, 51, ${op})`,
  yellow: (op = 1) => `rgba(255, 216, 54, ${op})`,
  lightYellow: (op = 1) => `rgba(255, 237, 0, ${op})`,
  green: (op = 1) => `rgba(0, 114, 63, ${op})`,
  white: (op = 1) => `rgba(240, 240, 240, ${op})`,
  darkWhite: (op = 1) => `rgba(233, 233, 233, ${op})`,
  lightWhite: (op = 1) => `rgba(255, 255, 255, ${op})`,
  midWhite: (op = 1) => `rgba(248, 248, 248, ${op})`,
};
