'use strict';

module.exports = function () {
  var endPoint = false;

  this.endPoint = function(value) {
    endPoint = value;
  };

  this.$get = [function () {
    return endPoint;
  }];
};