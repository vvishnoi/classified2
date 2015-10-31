# angular2-seed & ng2-bootstrap & SB Admin 2.0

Integration showcase of [angular2-seed-ng2-bootstrap](https://github.com/ludohenin/angular2-seed-ng2-bootstrap) (Itself an integration of [ng2-bootstrap](http://valor-software.github.io/ng2-bootstrap/) with [angular2-seed](https://mgechev.github.io/angular2-seed)) and [SB Admin 2.0](http://startbootstrap.com/template-overviews/sb-admin-2/).

# What is it?

This template combines the famous StartBootstrap Admin v2.0 template with an Angular 2.0 template by Minko Gechev. Ludovic Henin did the initial integration of NG-Bootstrap, a set of controller components for Bootstrap written for Angular 2.0. 

Submissions are welcome. There are a lot of opportunities to get this template into better shape. Hopefully we can help improve the dependency projects in the process. 

# How to start

**Note** that this seed project requires node v0.12.x or higher and npm 3.x.x.

```bash
git clone https://github.com/briantopping/angular2-ng2-bootstrap-sbadmin.git
cd angular2-ng2-bootstrap-sbadmin
npm install   # clean npm cache & delete node_modules folder if you get an error
npm start     # start with --env dev
```
_Does not rely on any global dependencies._

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Now to extend?

If you want to use your custom libraries:

```bash
npm install my-library --save
vim tools/config.js
```
Add reference to the installed library in `PATH.src.jslib` (or whatever you like).

# Running test

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
```

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
