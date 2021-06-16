const getTheTitles = function(books) {
    let titles=[];
    for (let index = 0; index < books.length; index++) {
        titles.push(books[index].title);
        
    }
    return titles;
};

module.exports = getTheTitles;
