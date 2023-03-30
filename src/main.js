// Requiring the lodash library 
const _ = require("lodash"); 

class mainclass{
    static test(){
        let original = [
            { 'name': 'momo', 'age': 20 },
            { 'name': 'mitu', 'age': 30 },
            { 'name': 'sujjo', 'age': 10 },
            { 'name': 'muni', 'age': 12 } ];
         
          // Use of _.sortBy() method
        let modified = _.sortBy(original, ['name', 'age']);
        return modified;
    }
}

module.exports = mainclass;