var _ = require('lodash'); 

var chained = function(arr) {
    return _.chain(arr)
        .sortBy()
        .map(function(item){
            return item.toUpperCase() + 'CHAINED';
        })
        .value(); 
};

module.exports = chained; 