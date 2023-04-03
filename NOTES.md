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

## Ignoring files
If you want the compiler to ignore a give .scss file, add an underscore "_" prefix to the file.

Note: importing works "top to bottom", so any files that include dependancies *for* other files need to come first in the .scss.

## Previewing your changes
To Load a live preview of the .html, right-click on `index.html` and select "Open with Live Server" (if you don't have that VSCode extension, please add it first)

## "Partials"
After you've begun fleshing-out your styilngs, you'll soon find that your main .scss file is *balooning*. Partials allow you to extract chunks of your styling to seperate files (like, a file for the default / "branded" colors of your app, a file for buttons, a file for input fields, etc.)

To import a file, use the `@import ''` syntax. Notice that we have not used the `url` prefix (`@import *url*'' `'). Also, you do not need to include the file `.scss` suffix - the compiler will infer this automatically.

## Maps & Loops (to save time!)
You can create maps, which act pretty much like JS objects (key:value pairs), and then use loops to produce a bunch of wrote classes automatically, via the SASS compiler.

        For instance, say you've got a style guide with eight colors (primary, secondary, error, etc.). Now you need to create classes that concatonate these with things like "text color" and "background color" ... you *could* write out each and every class <vomit!> OR you can 1. create a map of the eight colors, and then 2. use a loop to concatonate a given prefix ("text") with the value of the associated key ... so you get `.text-primary {
            color: whateverYouChoseForPrimary
        }` and `.text-secondary {
            color: whateverYouChoseForSecondary
        }`, etc.

For an example of this, check the [_colors.scss](./shinobi/_colors.scss)

Note: if the sheer size of the resultant classes seems overwhelming, know that you can "purge" unused ones ... so you can create your SASS, generate your css, work on your html, and when you're finished, re-generate your css using the compiler