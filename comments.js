var _ = require('lodash'); 

var comment = function(arr) {
    //var users = [];
    var arrObj = [];
    var obj = {};
    
    var users = _.groupBy(arr, 'username');

    _.forEach(users, function(value, key){
        arrObj.push({
            'username': key,
            'comment_count': _.size(value)
        });
    });
    
    return _.sortBy(arrObj, 'comment_count').reverse(); 
};

module.exports = comment; 