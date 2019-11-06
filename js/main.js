// listen for form submit
document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    var new_bookmark = {
        name: siteName,
        url: siteUrl
    };

    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(new_bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }else{
        var current_bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        current_bookmarks.push(new_bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(current_bookmarks))
    }
    //prevent form from submitting before we've dealt with it
    e.preventDefault();
}
