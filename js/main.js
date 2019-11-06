// listen for form submit
document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    document.getElementById('bookmarkForm').reset();
    var newBookmark = {
        name: siteName,
        url: siteUrl
    };

    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(newBookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }else{
        var currentBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        currentBookmarks.push(newBookmark);
        localStorage.setItem('bookmarks', JSON.stringify(currentBookmarks));
    }
    loadBookmarks()
    //prevent form from submitting before we've dealt with it
    e.preventDefault();
}

function deleteBookmark(url){
    var currentBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (let i = 0; i < currentBookmarks.length; i++) {
        if(currentBookmarks[i].url === url){
            currentBookmarks.splice(i, 1)
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(currentBookmarks));
    loadBookmarks()
}

function loadBookmarks() {
    var currentBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var savedBookmarks = document.getElementById('savedBookmarks');
    savedBookmarks.innerHTML = '';
    for(var i=0; i<currentBookmarks.length; i++){
        var name = currentBookmarks[i].name;
        var url = currentBookmarks[i].url;

        savedBookmarks.innerHTML += '<div class="well">'+
                                    '<h3>'+name+
                                    '<a class="btn btn-info" target="_blank" href="'+url+'">Visit</a>'+
                                    '<a class="btn btn-danger" onclick="deleteBookmark(\''+url+'\')" href="#">Delete</a>'+
                                    '</h3>'+
                                    '</div>'
    }
}