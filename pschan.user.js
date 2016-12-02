// ==UserScript==
// @name         G changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Austin Scott
// @match        https://danbury.powerschool.com/guardian/home.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function doS() {
        var i;
        var l =[];
        var c = document.getElementsByTagName('a');
        for (i=0;i < c.length;i++) {if (parseInt(c[i].innerText)) {l.push(c[i]);}}
        for (i=0;i < l.length;i++) {var r = Math.floor(Math.random() * 9) + 90;l[i].innerText=r.toString();}
    }

    window.onload=doS();
})();
