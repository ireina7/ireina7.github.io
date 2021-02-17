function dynamically_load_script(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}
function get_random_Int(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//# sourceMappingURL=utils.js.map
