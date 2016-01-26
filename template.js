var _ = require('lodash'); 

var template = function(data) {
    
    var str = ''; 
    
    str += _.template('Hello <%= name %>')({name: data.name});
    str += _.template(' (logins: <%= num %>)')({num: data.login.length});
    
    return str; 
};

module.exports = template;