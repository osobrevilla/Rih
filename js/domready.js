var onDomReady = (function (fn) {

    if (document.addEventListener) {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", function (e) {
            document.removeEventListener("DOMContentLoaded", arguments.callee, false);
            fn(e);
        }, false);

    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function (e) {
            if (document.readyState === "complete") {
                document.detachEvent("onreadystatechange", arguments.callee);
                fn(e);
            }
        });
    }
});

function getElementsByClassName(node, classname) {
    if (document.getElementsByClassName)
        return node.getElementsByClassName(classname);
    var a = [];
    var re = new RegExp('(^| )'+classname+'( |$)');
    var els = node.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
    return a;
}