// listen for form submit
document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    console.log(bookmark);
    //prevent form from submitting before we've dealt with it
    e.preventDefault();
}
