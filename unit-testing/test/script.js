
function bookName(book){
    let books = book.split(' ').map(e=> e[0].toUpperCase()+e.substring(1)).join(' ');
    return books;
}

module.exports.bookName = bookName;