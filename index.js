'use strict';
var uuid = require('node-uuid');
var underscore = require('underscore');

var memoize = function(fun, ttl) {
    if(ttl === undefined) {
        ttl = 5;
    }
    if (global.memoizeCache === undefined) {
        var NodeCache = require("node-cache");
        global.memoizeCache = new NodeCache({
            stdTTL: ttl
        });
    }
    var memoizeNamespace = uuid.v4();

    return function() {
        var functionArgs = underscore.values(arguments);
        var memoizeKey =  memoizeNamespace + functionArgs.join();
        var memoizeValue = global.memoizeCache.get(memoizeKey);
        if(underscore.isEmpty(memoizeValue)) {
            var v = fun.apply(null, functionArgs);
            global.memoizeCache.set(memoizeKey, {value: v});
            return v;
        } else {
            return memoizeValue[memoizeKey].value;
        }
    };
};
module.exports = memoize;
