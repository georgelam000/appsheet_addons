// ==UserScript==
// @name         Test Tooltip
// @namespace    https://www.appsheet.com/
// @version      2026-01-13
// @description  try to take over the world!
// @author       You
// @match        https://www.appsheet.com/*40facf3a-3b61-407a-b93a-468bedc2891f*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.js
// @require      https://code.jquery.com/ui/1.14.1/jquery-ui.js
// ==/UserScript==
/* global $ */
(function() {
    'use strict';

    // Your code here...
    $(document).ready(function() {
        setTimeout(function(){
           var tipcontent = "&nbsp;<a href='#' title='This is tooltip'><i class='far fa-question-circle'></i></a>";
           $("div[role='heading']:first").append(tipcontent);
        },1000);
    });
})();
