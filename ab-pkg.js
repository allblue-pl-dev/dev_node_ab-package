'use strict';

const abPackage = require('ab-package');
const abPackage_AllBlue = require('ab-package_allblue');


abPackage.exec({
    config: {
        git: 'dev_node_ab-package_test',
        npm: 'ab-package_test',
        bower: 'ab-package_test',
    },
    package: [
		abPackage_AllBlue,
		{
			name: 'ab-package_test',
			description: 'Test package for `ab-package` package (a lot of `package` in ' +
					'this description... package).',
			gitUri: 'https://github.com/allblue-pl-dev/dev_node_ab-package',
			keywords: [ 'ab-package-test' ],
		}
	],
});
