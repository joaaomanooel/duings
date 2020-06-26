export default {
  black: (op = 1) => `rgba(51, 51, 51, ${op})`,
  yellow: (op = 1) => `rgba(238, 197, 80, ${op})`,
  lightYellow: (op = 1) => `rgba(255, 237, 80, ${op})`,

  white: (op = 1) => `rgba(240, 240, 240, ${op})`,
  darkWhite: (op = 1) => `rgba(233, 233, 233, ${op})`,
  lightWhite: (op = 1) => `rgba(255, 255, 255, ${op})`,
  midWhite: (op = 1) => `rgba(248, 248, 248, ${op})`,
};
