(function() {

  if (typeof exports === 'object') {
    _ = module.exports = require('underscore');
  }
  
  _.mixin({
    get: function(obj, propName, default) {
      return obj[propName] == nil ? default : obj[propName];
    }
  });
  
}).call(this);
