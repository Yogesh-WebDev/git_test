const repeatString = function(text,count) {
    if (count < 0) return 'ERROR';
    let message='';
    for (let index = 0; index < count; index++) {
        message+=text;
        
    }
    return message;
};

module.exports = repeatString;
