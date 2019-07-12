#!/usr/bin/env node

module.exports = function(context) {

    /** @external */
    var UpdateConfig = require('./../update_config.js'),
        updateConfig = new UpdateConfig(context);

    /** Main method */
    var main = function() {
        // Add xwalk preference to config.xml
        updateConfig.addPreferences();

        Promise.resolve();
    };

    main();

    return Promise.promise;

};
