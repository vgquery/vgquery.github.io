function get(id) {
    return document.getElementById(id);
}
document.onkeydown = function (ev) {
    ev = ev || window.event;
    if (ev.keyCode == 13) {
        query();
    }
}
var key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiMjIzMWRiMC02M2VjLTAxMzYtMDc0My0wYTU4NjQ2MGI5MjkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTMwOTUxNjk5LCJwdWIiOiJzZW1jIiwidGl0bGUiOiJ2YWluZ2xvcnkiLCJhcHAiOiJ2Z3F1ZXJ5Iiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.I2y8hWOA_IKT8VGCeN2qEoJYT8wuSTDzDy1esjIBuBQ';
function request(url, fn) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            fn(req);
        }
    };
    req.open('GET', 'https://api.dc01.gamelockerapp.com/shards/' + url);
    req.setRequestHeader('Authorization', key);
    req.setRequestHeader('Accept', 'application/vnd.api+json');
    req.send(null);
}
function query() {
    var rgn = get('rgn').value;
    var name = get('name').value;
    request(rgn + '/players?filter[playerNames]=' + name, function (req) {
        get('player').innerHTML = JSON.stringify(JSON.parse(req.responseText), null, 2);
    })
    request(rgn + '/matches?filter[playerNames]=' + name, function (req) {
        get('matches').innerHTML = JSON.stringify(JSON.parse(req.responseText), null, 2);
    })
}