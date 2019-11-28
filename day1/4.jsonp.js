function jsonp(url, jsonpCallback, success) {
    let scriptDiv = document.createElement('script');
    scriptDiv.src = url;
    script.async = true;
    script.type = "text/javascript";
    window[jsonpCallback] = function(data) {
        success && success(data)
    }
    document.body.appendChild(scriptDiv);
}
jsonp(
    "http://xxx",
    "callback",
    function(value) {
        console.log(value);
    }
);