module.exports = {
  presets: ["next/babel", "@emotion/babel-preset-css-prop"],
  plugins: [
    [
      "emotion",
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== "production",
        labelFormat: "[local]",
        cssPropOptimization: true,
      },
    ],
    "preval",
    "macros",
  ],
};
