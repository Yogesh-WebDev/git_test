const removeFromArray = function(array,value) {
    for (let index = 0; index < array.length; index++) {
        if (array[index]===value) {
            array.splice(index,1);
            break;
        }
        
    }
    return array;
};

module.exports = removeFromArray;
