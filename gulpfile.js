const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps"),
  rollup = require("rollup"),
  babel = require("rollup-plugin-babel"),
  resolve = require("rollup-plugin-node-resolve"),
  commonjs = require("rollup-plugin-commonjs"),
  replace = require("rollup-plugin-replace"),
  uglify = require("@lopatnov/rollup-plugin-uglify");

const destFolders = {
  js: "dest/js",
  css: "dest/css",
};

const inputFolders = {
  js: "src/app.js",
  css: "src/portal.scss",
};

const sassOptions = {
  includePaths: ["node_modules"],
};

// Js Tasks
async function bundleJs() {
  const bundle = await rollup.rollup({
    input: inputFolders.js,
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      commonjs({
        namedExports: {},
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      resolve(),
      uglify(),
    ],
  });

  return await bundle.write({
    file: `${destFolders.js}/bundle.js`,
    format: "umd",
    name: "Khusa",
    sourcemap: false,
  });
}

// Sass Tasks
gulp.task("portal", () => {
  return gulp
    .src(inputFolders.css)
    .pipe(sass.sync(sassOptions).on("error", sass.logError))
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(gulp.dest(destFolders.css));
});

exports.bundleJs = bundleJs;
