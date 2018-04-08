
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');

var templateUrl = "https://drive.google.com/embeddedfolderview?id={googleFolderId}#grid";
var url = templateUrl.replace("{googleFolderId}", id);

console.log(url);
$('#myDiv').text(url);
$('#myIframe').attr('src', url);                                       