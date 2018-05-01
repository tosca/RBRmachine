$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
}



//var urlParams = new URLSearchParams(window.location.search);
var id = $.urlParam('id');

var templateUrl = "https://drive.google.com/embeddedfolderview?id={googleFolderId}#grid";
var url = templateUrl.replace("{googleFolderId}", id);

console.log(url);

$('#myIframe').attr('src', url);                                       