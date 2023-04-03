// import { src, dest, watch, series } from 'gulp'
import pkg from 'gulp';
const { src, dest, watch, series } = pkg;
// const sass = require('gulp-sass')(require('sass'))
import gulpSass from 'gulp-sass';
import sass from 'sass';

const myGulpSass = gulpSass(sass);
// const sass = gulpSass(sass);

function buildStyles() {
    // return src('index.scss')
    return src('shinobi/**/*.scss')
    // .pipe(sass())
    .pipe(myGulpSass())
    .pipe(dest('css'))
}

function watchTask() {
    // watch(['index.scss'], buildStyles)
    watch(['shinobi/**/*.scss'], buildStyles)
}

// exports.default = series(buildStyles, watchTask)
export default series(buildStyles, watchTask);