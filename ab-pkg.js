'use strict';

const abPackage = require('ab-package');


abPackage.exec({
    config: {
        npm: 'ab-package_test',
        bower: 'ab-package_test',
    },
    package: {
        name: 'ab-package_test',
        description: 'Test package for `ab-package` package (a lot of `package` in ' +
                'this description... package).',
        author: 'Jakub Zolcik (AllBlue)',
        gitUri: 'https://github.com/allblue-pl-dev/dev_node_ab-package',
        keywords: [ 'ab-package-test' ],
    }
});
