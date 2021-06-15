const leapYears = function(year) {
let result=false;
result=((year%400 ===0)||(year%4===0))?true:false;
return result;
};

module.exports = leapYears;
