#!/usr/bin/env node

module.exports = function(context) {

    /** @external */
    var UpdateConfig = require('./../update_config.js'),
        updateConfig = new UpdateConfig(context);

    /** Main method */
    var main = function() {
        // Remove the xwalk variables
        updateConfig.removePreferences();

        return Promise.resolve();
    };

    return main();

};
