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
// @require     https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js
// @connect      appsheet.com
// ==/UserScript==
/* global $ */
(function() {
    'use strict';

    // Your code here...
    $(document).ready(function() {
        var resultJson;
        var resultMap = new Map();
        GM.xmlHttpRequest({
            method: "POST",
            url: "/api/v2/apps/40facf3a-3b61-407a-b93a-468bedc2891f/tables/supply_plan_full_by_month/Action",
            headers: {
                "Content-Type": "application/json",
                "applicationAccessKey": "V2-iFDBP-2pjIr-3xY3p-sqTrj-CC4FR-q2r5S-RwYZJ-xBTMX"
            },
            data: JSON.stringify({
               "Action": "Find",
               "Properties": {
                   "Locale": "en-US",
                   "Location": "47.623098, -122.330184",
                   "Timezone": "Pacific Standard Time"
                },
                "Rows": []
            }),
            onload: function(response) {
                resultJson = JSON.parse(response.responseText);
                $.each(resultJson, function(i, item) {
                    var key = resultJson[i].PSS_Supplier_Code + resultJson[i].Product_barcode + resultJson[i].Master_Barcode + resultJson[i].PSS_Client_Code + resultJson[i].PSS_Warehouse;
                    resultMap.set(key, resultJson[i]);
                });
            }
        }).catch(e => console.error(e));

        setTimeout(function(){
           var tipcontent = "&nbsp;<a href='#' title='This is tooltip'><i class='far fa-question-circle'></i></a>";
           $("div[role='heading']:first").append(tipcontent);
           $("div[data-testid='Updated_month']:first").append("Month selected is: " + $("input[aria-label='Month']").val());
           $("div[data-testonly-column='Version_Number']").hover(function( index ) {
               var rowElement = $(this).parent().parent();
               var PSS_Supplier_Code = rowElement.find("div[data-testonly-column='PSS_Supplier_Code'").text();
               var Product_barcode = rowElement.find("div[data-testonly-column='Product_barcode'").text();
               var Master_Barcode = rowElement.find("div[data-testonly-column='Master_Barcode'").text();
               var PSS_Client_Code = rowElement.find("div[data-testonly-column='PSS_Client_Code'").text();
               var PSS_Warehouse = rowElement.find("div[data-testonly-column='PSS_Warehouse'").text();
               var key = PSS_Supplier_Code + Product_barcode + Master_Barcode + PSS_Client_Code + PSS_Warehouse;
               var lineData = resultMap.get(key);
               var M5 = rowElement.find("div[data-testonly-column='M5'");
               M5.html("<a href='#' title='" + lineData.M5 + "'>" + M5.html() + "</a>");
           });
        },1000);



    });
})();
