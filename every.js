var _ = require('lodash'); 

var every = function(hash) {
    
    return _.forEach(hash, function(item){
       if (item.population >= 0.5 && item.population < 1) {
           item.size = 'med';
       } else if(item.population > 1) {
           item.size = 'big';
       } else {
           item.size = 'small';
       }
    });
};

module.exports = every; 