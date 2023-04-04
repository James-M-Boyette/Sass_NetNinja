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

## Importing files
SASS importing works "top to bottom", so any files that include dependancies *for* other files need to come first in the .scss. That said, you don't need to do the kind of modular importing that you'd expect/be accustomed-to in Node ES6: so long as your index.scss has all of the necessary files imported into it, and your compiler has been made aware of said files, individual files can simply state their logic (withough importing or exporting anything)

## Previewing your changes
To Load a live preview of the .html, right-click on `index.html` and select "Open with Live Server" (if you don't have that VSCode extension, please add it first)

## "Partials"
After you've begun fleshing-out your styilngs, you'll soon find that your main .scss file is *balooning*. Partials allow you to extract chunks of your styling to seperate files (like, a file for the default / "branded" colors of your app, a file for buttons, a file for input fields, etc.)

To import a file, use the `@import ''` syntax. Notice that we have not used the `url` prefix (`@import *url*'' `'). Also, you do not need to include the file `.scss` suffix - the compiler will infer this automatically.

## Maps & Loops (to save time!)
Sass "maps" act pretty much like JS objects and hash maps (key:value pairs) - except that you can *also* automatically itterate over them using Sass "loops" ... they're likely called "maps" because of how closely-related they are to hash map objects and how often you'll 'map' over them in your css-generation logic.

The syntax for creating a map is `$[map name]: ("k":v)`, which ~= `const myObject = {"k":v}`. 

By themselves, Sass 'maps' have the same utility as regular JS 

Sass 'loops' are effectively `for...of` loops that allow you to target the k:v's of your parent map/object.

The syntax for creating a Sass loop is 
        `@each $[key], $[value] in $[map (nay, object) name] {
            ... your logic goes here (create constants, run nested loops, conditionals, etc.)
        }`


to produce a bunch of wrote classes automatically, via the SASS compiler.

        For instance, say you've got a style guide with eight colors (primary, secondary, error, etc.). Now you need to create classes that concatonate these with things like "text color" and "background color" ... you *could* write out each and every class <vomit!> OR you can 1. create a map of the eight colors, and then 2. use a loop to concatonate a given prefix ("text") with the value of the associated key ... so you get `.text-primary {
            color: whateverYouChoseForPrimary
        }` and `.text-secondary {
            color: whateverYouChoseForSecondary
        }`, etc.

For an example of this, check the [_colors.scss](./shinobi/_colors.scss)

Note: if the sheer size of the resultant classes seems overwhelming, know that you can "purge" unused ones ... so you can create your SASS, generate your css, work on your html, and when you're finished, re-generate your css using the compiler

## 'Mixins'
Mixins are a great way to DRY up your code, because you can group re-used properties together in a single 'Mixin' - if you're about to create, say, a bunch types and styling options for a utility 'button' component (buttons that are filled, buttons that are only outlined, buttons that do a special animation when clicked or hovered-over), you're likely going to be repeating your styling properties (probably all of your buttons will need a "pointer" cursor, standard padding & margins, and a color from your "colors" map - do you really want to re-write `cursor: pointer` for every loop or class?). 'Mixins' allow you to write common styling properties once, and then re-use/inject those properties.
For examples of 'mixin' implementation, see the [_buttons.scss](./shinobi/components/_button.scss)

## Functions
Functions allow you to perform even more complicated logic in your SASS compiler. For instance, say you want to create classes for padding and margin. You'll need a class for padding-left, another for padding-right, etc., AND you'll need incremental values for those classes (you're trying to make "pl-1", "pl-2", "pl-3", etc.) To do this work quickly and efficiently, you'll need two things:

- a more complex map - one that contains child maps, and 
- a function to itterate through this map of maps. 

Your map of maps could be called something like `$utilities`, and include two keys:

- a 'prefix' key, with the value you'd like to use for the class name (so, "prefix": "pl)

For examples of function implementation, see the [_utilities.scss](./shinobi/_utilities.scss)