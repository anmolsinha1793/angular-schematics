# SchematicsDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Reference document
https://medium.com/@tomastrajan/total-guide-to-custom-angular-schematics-5c50cf90cdb4
## Steps for generation of schematics and file generation in projects:

1. schematics blank my-custom-schematics

2. collection.json consists of all the schematics that we have created


3. npm rum build

4. in package.json change name to @schematics/demo

5. npm pack > schematics-demo-1.0.0.tgz

6. npm i --no-save schematics-demo-1.0.0-tgz

7. ng g @schematics/demo:crud-resource lazy-feature/services/super-admin --findOne
	or
	schematics @schematics/demo:crud-resource lazy-feature/services/super-admin --findOne
  or 
  schematics .:my-custom-schematics simplify  --scanAll --debug=false (for working locally and testing changes)
  or
  ng g @schematics/demo:my-custom-schematics lazy-feature/components/super-admin --scanAll
