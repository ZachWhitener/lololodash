var _ = require('lodash'); 

var overview = function(arr) {
    var articles = _.groupBy(arr, 'article'); 
    var arrObj = []; 
    var sum = 0; 
    
    _.forEach(articles, function(value, key){
        
        sum = _.reduce(value, function(num, val){
            return num + val.quantity 
        }, 0);
        
        
        arrObj.push({
            'article': parseInt(key),
            'total_orders': sum
        });
    });
    
    return _.sortBy(arrObj, 'total_orders').reverse();
};

module.exports = overview; 