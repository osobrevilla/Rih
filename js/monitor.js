window.onload = function(){
    var hud = document.createElement('div'),
        img = document.getElementsByTagName('img')[0],
        calc = function(){ 
            hud.innerHTML = img.getAttribute('src') + '<br>('+(img.naturalWidth + 'x' + img.naturalHeight)+') Viewport: ' + (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
        };
    hud.id = "monitor";
    if ( window.addEventListener ){
        addEventListener('resize', calc, false);
    } else {
        attachEvent('onresize', calc);
    }
    document.body.appendChild(hud);
    calc();
};
