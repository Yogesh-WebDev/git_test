const palindromes = function (message) {
    let newMessage='';
    for (let index = 0; index < message.length; index++) {
        newMessage += message[index];
        
    }
    return (newMessage===message)?true:false;
};

module.exports = palindromes;
