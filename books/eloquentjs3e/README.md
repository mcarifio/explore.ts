# eloquent3e

Problem solutions for problems posed in Eloquent Javascript 3e. The solutions are typically implemented as  [ESM modules](https://flaviocopes.com/es-modules/)
or "just" javascript modules that can be used "isomorphically" on server hosts (node) and client hosts (web browser). This isomorphism is currently a lot harder
than it looks. Not conceptually, but the various tools and implementations really don't implement the es6 standard. From the viewpoint of February 2019, that doesn't
look to change very quickly either.

## Setup

* I use [webstorm](https://www.jetbrains.com/webstorm/) for coding. Wish I could say I love it, but it's promise brings me
back.

* This project uses the [ava](https://github.com/avajs/ava) testing framework. Ava supports ESM modules and I'm trying to learn it.


## Layout

The project layout is guided by https://labs.mlssoccer.com/a-javascript-project-structure-i-can-finally-live-with-52b778041b72 and
https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb for "client half" of the layout. Details:

```
tree -cF -I node_modules

├── attic/  ## files without a decision or disposition
├── package-lock.json  ## npm support
├── package.json
├── bin/ ## local scripts in bash and/or node
├── src/ ## code itself
│   ├── modules/ ## the meat
│   │   ├── chessboard.mjs
│   │   ├── fizzbuzz.mjs
│   │   ├── min.mjs
│   │   └── __tests__/  ## test suite, following js, ava and jest naming conventions
│   │       ├── min.test.js
│   │       ├── helpers/
│   │       │   └── withPage.js
│   │       ├── chessboard.test.js
│   │       ├── fizzbuzz.test.js
│   │       └── demonstrate_puppeteer.js
│   └── hosts/ ## various "js hosts" partitioned by client or server and technology name (e.g. node or vuejs)
│       ├── servers/
│       │   └── nodejs/
│       │       ├── chessboard-node-client.mjs ## example use of chessboard module in nodejs
│       │       ├── fizzbuzz-node-client.mjs
│       │       └── min-node-client.mjs
│       └── clients/
│           ├── vuejs/
│           └── html5/
│               └── min-web-client.html  ## example use of min.mjs in a vanilla html5 file
├── .config/  ## configuration files for other tools, follow XDG naming conventions https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
├── .editorconf  ## for editors
├── ava.config.js  ## for ava, e.g. the ava cli
└── README.md  ## you are here

```

Note that .gitignore is two folders up from here.

## References

* [ava assertions](https://github.com/avajs/ava/blob/master/docs/03-assertions.md#built-in-assertions)

## Tips

When creating webstorm launchers, pay attention to the working directory so you can find the correct `node_modules` directory.
It's confusing when the command line behaves differently from webstorm.

The [webstorm debugger recipe](https://github.com/avajs/ava/blob/v0.25.0/docs/recipes/debugging-with-webstorm.md) works but don't add `--inspect-brk` on the webstorm
node launcher. It just stalls webstorm. 


## TODO

* Configure webstorm to run the tests and examples (`hosts/**`) under the debugger. Seems hairy.

* Convert this larger repo into a smaller set and then use gitree to combine them? Seems like a lot of work for no benefit other than learning gitree.

* Add travis.yml. Where?
