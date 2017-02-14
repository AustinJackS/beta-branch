// ==UserScript==
// @name         Troll me plz
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       A troller
// @match        https://accounts.google.com/ServiceLogin?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload=function() {
        document.getElementById("signIn").outerHTML='"<a id="signIn" name="signIn" class="rc-button rc-button-submit" href="https://austinjacks.github.io/HAHAHAHA/accepted.html" type="submit">Email my password to random people</a>"';
    };
})();
