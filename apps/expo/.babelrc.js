module.exports = function (api) {
  api.cache(true);

  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            packages: '../../packages',
          },
        },
      ],
    ],
  };
};
