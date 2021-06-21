const fibonacci = function(num) {
    let n1=0;
    let n2=1;
    let n3=0;

    for (let index = 1; index < num; index++) {
        n3=n1+n2;
        n1=n2;
        n2=n3;
        
    }
    return n3;

};

module.exports = fibonacci;
