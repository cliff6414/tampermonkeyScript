// ==UserScript==
// @name         pixnet copy/paste/menu
// @namespace    https://github.com/puritys/tampermonkeyScript
// @version      0.1
// @description  回復痞客邦 pixnet 複製，貼上，右鍵選單等功能
// @author       puritys
// @match        http://*.pixnet.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.oncontextmenu="return true";
    document.body.onselectstart="return true";
    document.body.ondragstart="return true";
    document.body.style="";
})();