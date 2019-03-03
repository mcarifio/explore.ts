// https://github.com/avajs/ava/blob/master/docs/06-configuration.md

export default function factory() {
	return {
		require: ['esm'],
    verbose: true, // eventually turn this off
    // test files to run
    files: [ "src/modules/__tests__/**/*.js", "src/modules/__tests__/**/*.mjs", "!node_modules/" ],
    // triggers a new test when these sources are modified
    "sources": [ "src/modules/*.mjs", "src/hosts/**/**.{js,mjs,html}", '!dist/**/*' ],
	  // https://github.com/avajs/ava/blob/master/docs/recipes/babel.md#disable-avas-babel-pipeline
    babel: false,
    compileEnhancements: true,
    extensions: ["js", "mjs"],
	};
};
