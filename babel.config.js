module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@context': './src/context',
          '@providers': './src/providers',
          '@screens': './src/screens',
          '@lib': './src/lib',
          '@constants': './src/constants',
          '@templates': './src/templates',
          '@widgets': './src/widgets',
          '@public': './src/public',
        },
      },
    ],
  ],
};
