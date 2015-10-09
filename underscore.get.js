'use strict';

(function() {

  if (typeof exports === 'object') {
    _ = module.exports = require('underscore');
  }
  
  _.mixin({
    get: function(obj, propName, default) {
      var result = obj[propName];
      return (result == undefined || result == null) ? default : result || null;
    }
  });
  
}).call(this);
