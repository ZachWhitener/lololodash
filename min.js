var _ = require('lodash'); 

var minify = function(towns) {
    var hots = [],
        warms = [];
         
    _.forEach(towns, function(value, key){
        var hot = _.every(value, function(item){
            return item >= 19;
        });
        
        var warm = _.some(value, function(item){
            return item >= 19;
        });
        
        if (hot) {
            hots.push(key);
        } 
        else if (warm) {
            warms.push(key); 
        }
    });
    
    return {
        'hot': hots, 
        'warm': warms
    }; 
    
};

module.exports = minify; 