(function (window, document) {
    'use strict';
    window.onload = function () {
        var hud = document.createElement('div'),
            img = document.getElementsByTagName('img')[0],
            checkSrc = function () {
                hud.innerHTML = img.getAttribute('src') + '<br>(' + (img.naturalWidth + 'x' + img.naturalHeight) + ') Viewport: ' + (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
            };
        hud.id = "current-src";
        if (window.addEventListener) {
            window.addEventListener('resize', checkSrc, false);
        } else {
            window.attachEvent('onresize', checkSrc);
        }
        document.body.appendChild(hud);
        checkSrc();
    };
}(this, this.document));
