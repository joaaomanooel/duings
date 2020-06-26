module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/root': '.',
            '@': './src',
          },
        },
      ],
    ],
    env: { production: { plugins: ['transform-remove-console'] } },
  };
};
