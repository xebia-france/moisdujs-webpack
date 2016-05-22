# Mois du JS - Webpack

This  repository shows examples of Webpack use, based on [moisdujs-base]() basic javascript vanilla application.  
**_WARNING_ this works only on Chrome**

#### step/1

Refactor code to use webpack packaging (no Boostrap yet).  

#### step/2

Include Bootstrap and jQuery dependencies.  
Configure global jQuery module with Webpack ProvidePlugin.  
Add filer-loader and url-loader to bundle Bootstrap glyphicons dependency. 

#### step/3

Add extract-text-webpack-plugin to bundle css in a separate file. 

#### step/4

Add eslint and eslint-loader, add preloader config to lint files before each webpack build. 

#### step/5

Add compression plugin to gzip js and css bundles. 

#### step/6

Add assets plugin and webpack configuration.
Replace index.html by index.mustache.
Add npm build script to generate index.html from template.

#### step/7

Add less loader and webpack configuration.

#### step/8

Use Webpack CommonsChunkPlugin to bundle vendors in a separate file.
Add vendors import into index.mustache to generate script import as for the app.

#### step/8bis

Like step/8 but this time vendors entry reference a module that import all vendors (here bootstrap).

### Licence

ISC
