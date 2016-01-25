var _ = require('lodash'); 

var sorter = function(obj) {
    return _.sortBy(obj, 'quantity').reverse();
}

module.exports = sorter; 