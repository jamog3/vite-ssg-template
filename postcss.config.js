module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-rem'),
    require('stylelint'),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: 'autoplace',
      },
      stage: 1,
    }),
    require('postcss-sort-media-queries')({ sort: 'mobile-first' }),
    process.env.NODE_ENV === 'production' &&
      require('cssnano')({
        autoprefixer: {
          add: false,
        },
        preset: 'advanced',
      }),
    require('postcss-reporter')({
      clearReportedMessages: true,
      throwError: false,
    }),
  ],
}
