// ==UserScript==
// @name         Test Tooltip
// @namespace    https://www.appsheet.com/
// @version      2026-01-13
// @description  try to take over the world!
// @author       You
// @match        https://www.appsheet.com/*40facf3a-3b61-407a-b93a-468bedc2891f*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM.xmlHttpRequest
// @require      https://code.jquery.com/jquery-3.7.1.js
// @connect      appsheet.com
// ==/UserScript==
/* global $ */
(function() {
    'use strict';

    // Your code here...
    $(document).ready(function() {
        setTimeout(function(){
           var tipcontent = "&nbsp;<a href='#' title='This is tooltip'><i class='far fa-question-circle'></i></a>";
           $("div[role='heading']:first").append(tipcontent);
           $("div[data-testid='Updated_month']:first").append("Month selected is: " + $("input[aria-label='Month']").val());
           $("div[data-testonly-column='M4']").each(function( index ) {
               var initText = $(this).text();
               var initHtml = $(this).html();
               $( this ).html("<a href='#' title='" + initText + "'>" + initHtml + "</a>");
           });
            GM.xmlHttpRequest({
                method: "POST",
                url: "/api/v2/apps/40facf3a-3b61-407a-b93a-468bedc2891f/tables/supply_plan_param/Action",
                headers: {
                    "Content-Type": "application/json",
                    "applicationAccessKey": "V2-iFDBP-2pjIr-3xY3p-sqTrj-CC4FR-q2r5S-RwYZJ-xBTMX"
                },
                data: JSON.stringify({
                    "Action": "Find",
                     "Properties": {
                         "Locale": "en-US",
                         "Location": "47.623098, -122.330184",
                         "Timezone": "Pacific Standard Time",
                         "Selector": "Filter(supply_plan_param, AND([PSS_Supplier_Code] ='MUSTN', [PSS_Client_Code]='FRCA'))"
                     },
                    "Rows": []
                }),
                onload: function(response) {
                    console.log(response.responseText );
                    var resultData = JSON.parse(response.responseText);
                    for (var r in resultData) {
                         console.log(resultData[r].POD);
                    }
                }
            }).catch(e => console.error(e));
        },1000);
    });
})();
