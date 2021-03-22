import { strings } from '@angular-devkit/core';
import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import {getWorkspace} from '@schematics/angular/utility/config';
import {buildDefaultPath, getProject} from '@schematics/angular/utility/project';
import {parseName} from '@schematics/angular/utility/parse-name';
import { move } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function crudResource(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workSpace = getWorkspace(tree);
    const projectName = _options.project || Object.keys(workSpace.projects)[0];
    const project = getProject(workSpace, projectName);
    const path = _options.path || buildDefaultPath(project as any);
    const parsedPath = parseName(path, _options.name);

    _options.name = parsedPath.name;
    _options.path = parsedPath.path;

    const sourceTemplates = url('./files');
    const sourceParameterizedTemplates = apply(sourceTemplates, [
      template({
        // ..._options,
        ..._options,
        ...strings
      }),
      move(parsedPath.path)
    ]);
    // const {name} = _options;
    // tree.create('demo.js', `console.log('Welcome to demo!, ${name}');`);
    return mergeWith(sourceParameterizedTemplates)(tree, _context) as Tree;
  };
}
