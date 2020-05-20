#How to use

Clone this repo and then in command line type:

* `npm install` or `yarn` - install all dependencies
* `gulp` - run dev-server and let magic happen, or
* `gulp build` - build project from sources

--

## List of Gulp tasks

To run separate task type in command line `gulp [task_name]`.
Almost all tasks also have watch mode - `gulp [task_name]:watch`, but you don't need to use it directly.

### Main tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files, run server with livereload
`build:dev`        | build dev version of project (without code optimizations)
`build`            | build production-ready project (with code optimizations)

### Other tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`sass` 	           | compile .sass/.scss to .css. We also use [postcss](https://github.com/postcss/postcss) for [autoprefixer](https://github.com/postcss/autoprefixer) and [Lost](https://github.com/peterramsing/lost), so feel free to include other awesome postcss [plugins](https://github.com/postcss/postcss#plugins) when needed
`webpack`          | compile .js sources into bundle file
`copy`             | copy common files from `./src` path to `./build` path
`swig`             | compile [swig](http://paularmstrong.github.io/swig/)  templates
`nunjucks`         | compile Mozilla's awesome [nunjucks](https://mozilla.github.io/nunjucks/) templates
`images`           | optimized images
`server`           | run dev-server powered by [BrowserSync](https://www.browsersync.io/)
`clean`            | remove `./build` folder
`list-pages`       | create index file with links to all project pages

_This is a full list of tasks, that we use in our projects, but not all of them should be available in current project. For example, we only use one template engine out of these three [`jade`, `nunjucks`, `swig`]. All available tasks are placed in a folder `./gulp/tasks` as separate *.js files. Usually, file name = task name._
