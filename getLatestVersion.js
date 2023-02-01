function getLatestVersion() {    
    var xmlHttp = new XMLHttpRequest();
    var requestLink = "";
    xmlHttp.open("GET", requestLink, false);
    xmlHttp.send(null);
    var releaseInfo = JSON.parse(xmlHttp.responseText);
    return releaseInfo.tag_name
}
