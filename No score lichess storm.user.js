// ==UserScript==
// @name         No score lichess storm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide current score on Lichess puzzle storm
// @author       Olivier Coz
// @match        https://lichess.org/storm
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lichess.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(".puz-side").hide()
})();