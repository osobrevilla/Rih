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