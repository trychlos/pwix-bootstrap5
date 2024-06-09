/*
 * pwix:bootstrap5/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versiomns';

if( false ){
    // whitelist packages which are included via a subfolder or badly recognized
    require( '@popperjs/core/package.json' );
    require( 'bootstrap/package.json' );
}

checkNpmVersions({
    '@popperjs/core': '^2.11.0',
    'bootstrap': '^5.2.0',
},
    'pwix:bootstrap5'
);
