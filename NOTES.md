.sass files have a different syntax than .scss, and are leff-often used

## Compiling SASS
To compile SASS in VSCode Automatically, install the "Live Sass Compiler" by Glenn Marks
You can also use Gulp (which provides additional options). You will need 'gulp' as well as 'gulp-sass' (and 'sass').
- Run `npm install gulp gulp-sass sass --sav-dev`

## What is Gulp?
Its an automation scripting library. You write JS functions for Gulp to run.

## Using Gulp
In order to have Gulp watch your `index.scss`, you need to 
1. Do some setup:
- create a gulp.js file (which we've already done) and import the sass-specific `sass-gulp` gulp library (which we've *also* already done)

2. Run your Gulp service:
- If you do not have Gulp installed globally, run `npx gulp` in the root of this project. Gulp will then watch the designated file(s) in your gulp.js instructions. (Note: we've named our gulp file 'gulpfiles.js')

## Previewing your changes
To Load a live preview of the .html, right-click on `index.html` and select "Open with Live Server" (if you don't have that VSCode extension, please add it first)