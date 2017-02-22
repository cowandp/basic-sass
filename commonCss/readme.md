#commonCSS for OOD

This project will compile the CSS from a SASS (common.scss) file (common.css)

Navigate to the commonCss folder
Do "npm install"
Then do "gulp"

The default choice ("gulp")  will compile/combine the sass and output it to the server_location 

folder to copy it onto the server. It will then start watching for any changes to the scss files 

and recompiling as you do. 

"gulp prod" will create a combined/minified version and output it to dist/css/common.css as well 

as compile a sassdoc file if we so desire to use that. 

Guidance from: http://sassdoc.com/
