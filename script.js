var complete;
var present;

alert("Bin ich hier?")

function count_Prob(tiles) {
    var a = present / complete
    var b = tiles * a
    return b
};

var test = count_Prob(5);

console.log(test); 

