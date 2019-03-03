# eloquent3e

Problem solutions for problems posed in Eloquent Javascript 3e. The solutions are typically implemented as  [ESM modules](https://flaviocopes.com/es-modules/)
or "just" javascript modules that can be used "isomorphically" on server hosts (node) and client hosts (web browser). This isomorphism is currently a lot harder
than it looks. Not conceptually, but the various tools and implementations really don't implement the es6 standard. From the viewpoint of February 2019, that doesn't
look to change very quickly either.

## Setup

* I use [webstorm](https://www.jetbrains.com/webstorm/) for coding. Wish I could say I love it.

* This project uses the [ava](https://github.com/avajs/ava) testing framework to learn ava.


## Layout

The project layout follows https://labs.mlssoccer.com/a-javascript-project-structure-i-can-finally-live-with-52b778041b72 and
https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb for "client half" of the layout. 

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
│       │       ├── chessboard-node-client.mjs
│       │       ├── fizzbuzz-node-client.mjs
│       │       └── min-node-client.mjs
│       └── clients/
│           ├── vuejs/
│           └── html5/
│               └── min-web-client.html
├── .config/  ## configuration files for other tools, follow XDG naming convention
├── .editorconf  ## for editors
├── ava.config.js  ## for ava, e.g. the ava cli
└── README.md  ## you are here

```

Note that .git

## References

* [ava assertions](https://github.com/avajs/ava/blob/master/docs/03-assertions.md#built-in-assertions)


## TODO

* Test https://medium.com/samsung-internet-dev/isomorphic-es-modules-151f0d9a919b, https://www.npmjs.com/package/esm, https://medium.com/web-on-the-edge/tomorrows-es-modules-today-c53d29ac448c, https://github.com/kenotron/esm-jest, https://medium.com/passpill-project/files-with-mjs-extension-for-javascript-modules-ced195d7c84a, https://medium.com/@giltayar/native-es-modules-in-nodejs-status-and-future-directions-part-i-ee5ea3001f71. None of this worked.

 

```bash



```

* Convert this larger repo into a smaller set and then use gitree to combine them? Seems like a lot of work for no benefit other than learning gitree.
