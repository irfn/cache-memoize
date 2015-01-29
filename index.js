'use strict';
var uuid = require('node-uuid');
var underscore = require('underscore');
var Promise = require('bluebird');

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
            var returnValue;
            if(typeof(v._promiseAt)  === 'function') {
                returnValue = new Promise(function(resolve, reject){
                    v.then(function(value){
                        global.memoizeCache.set(memoizeKey, {value: value, type: 'promise'});
                        resolve(value)
                    }).catch(function(error){
                        reject(error);
                    });
                });
            } else {
                global.memoizeCache.set(memoizeKey, {value: v, type: 'value'});
                returnValue = v;
            }
            return returnValue;
        } else {
            if(memoizeValue[memoizeKey].type === 'promise') {
                return new Promise(function(resolve, reject){
                    resolve(memoizeValue[memoizeKey].value)
                });
            } else {
                return memoizeValue[memoizeKey].value;
            }
        }
    };
};
module.exports = memoize;
