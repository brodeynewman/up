module.exports = {
  retainLines: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10.18.1',
        },
      },
    ],
  ],
  plugins: [
    'transform-promise-to-bluebird',
  ],
};
