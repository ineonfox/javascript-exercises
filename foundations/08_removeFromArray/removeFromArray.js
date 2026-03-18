const removeFromArray = function(arr) {
    const valuesToRemove = Array.prototype.slice.call(arguments, 1);
    let filteredArray = arr.slice();
    for (value of valuesToRemove) {
        filteredArray = filteredArray.filter(v => v !== value);
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
