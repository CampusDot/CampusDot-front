module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@api': './src/api',
          '@public': './src/public',
          '@components': './src/components',
          '@context': './src/context',
          '@providers': './src/providers',
          '@screens': './src/screens',
          '@lib': './src/lib',
        },
      },
    ],
  ],
};
