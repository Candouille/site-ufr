# communaute-ufr-app

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Mettre à jour le site

Se placer sur la branche à synchroniser avec la prod (qui équivaut à la branche master)
Lancer la tâche grunt "build" afin de regénérer les fichiers minifiés du répertoire dist
Lancer la tâche grunt "buildcontrol/pages", cela push le répertoire dist sur master
