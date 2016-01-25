var _ = require('lodash');

var worker = function(arr) {
    var actives = _.filter(arr, { 'active': true} ); 
    console.log(actives);
    return actives; 
};

module.exports = worker; 

