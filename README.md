# pwix:ui-bootstrap5

## What is it ?

A Meteor package which just includes Bootstrap5 in your application.

This prevent you to manually include each and every wanted Bootstrap5 file. Just `use` this package, and enjoy.

## Configuration

None at the moment.

## NPM peer dependencies

Starting with v 0.3.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 2.0.0:
```
    '@popperjs/core': '^2.11.0',
    'bootstrap': '^5.2.0',
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

---
P. Wieser
- Last updated on 2024, Jun. 9th
