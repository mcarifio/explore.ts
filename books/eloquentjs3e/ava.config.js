// https://github.com/avajs/ava/blob/master/docs/06-configuration.md

export default function factory() {
	return {
		require: ['esm'],
    verbose: true, // eventually turn this off
	  // https://github.com/avajs/ava/blob/master/docs/recipes/babel.md#disable-avas-babel-pipeline
    babel: false,
    compileEnhancements: true,

    // How to find tests and how to trigger test runs.
    // Extensions that indicate js source files. .mjs is node for es6 modules.
    extensions: ["js", "mjs"],
    // Test files to run when not explicitly stated.
    files: [ "src/modules/__tests__/**/*.js", "src/modules/__tests__/**/*.mjs", "!node_modules/" ],
    // Trigger a new test run when these sources are modified.
    sources: [ "src/modules/*.mjs", "src/hosts/**/**.{js,mjs,html}", '!dist/**/*' ],
	};
};
