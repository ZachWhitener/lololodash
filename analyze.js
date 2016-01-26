var _ = require('lodash'); 

var analyze = function(arr) {
    var sum = 0,
        avg, 
        arrObj = []; 
    
    sum = _.reduce(arr, function(num, val){
        return num + val.income; 
    }, 0);
    
    avg = sum / arr.length; 
    
    var under = _.filter(arr, function(num){
        return num.income <= avg;
    });
    
    var over = _.filter(arr, function(num){
        return num.income > avg;
    });
    
    return {
        'average': avg, 
        'underperform': _.sortBy(under, 'income'), 
        'overperform': _.sortBy(over, 'income')
    };
};

module.exports = analyze; 