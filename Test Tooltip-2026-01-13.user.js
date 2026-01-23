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

    var resultJson;
    var resultMap = new Map();

    function getMonth() {
        var monthSelected = $("input[aria-label='Month']").val();
        var yearSel = monthSelected.substring(0, 4);
        var monthSel = monthSelected.substring(4, 6);
        var yearLast = yearSel;
        var monthLast = String(parseInt(monthSel) - 1);
        if (monthSel == "01") {
            yearLast = String(parseInt(yearSel) - 1);
            monthLast = "12";
        }
        if (monthLast.length == 1) {
            monthLast = "0" + monthLast;
        }
        var previousMonth = yearLast + monthLast;
        $.each(resultJson, function(i, item) {
            var mapKey = item.PSS_Supplier_Code + item.Product_barcode + item.Master_Barcode + item.PSS_Client_Code + item.PSS_Warehouse;
            if (item.Update_Month == previousMonth) {
                resultMap.set(mapKey, item);
            }
        });
    }

    function loadPreviousMonthData() {
        $("span[data-testid='table-view-row']").each(function( index ) {
            var rowElement = $(this);
            var PSS_Supplier_Code = rowElement.find("div[data-testonly-column='PSS_Supplier_Code']").text();
            var Product_barcode = rowElement.find("div[data-testonly-column='Product_barcode']").text();
            var Master_Barcode = rowElement.find("div[data-testonly-column='Master_Barcode']").text();
            var PSS_Client_Code = rowElement.find("div[data-testonly-column='PSS_Client_Code']").text();
            var PSS_Warehouse = rowElement.find("div[data-testonly-column='PSS_Warehouse']").text();
            var lineKey = PSS_Supplier_Code + Product_barcode + Master_Barcode + PSS_Client_Code + PSS_Warehouse;
            var lineData = resultMap.get(lineKey);
            var M1Html = rowElement.find("div[data-testonly-column='M1']").html();
            var M2Html = rowElement.find("div[data-testonly-column='M2']").html();
            var M3Html = rowElement.find("div[data-testonly-column='M3']").html();
            var M4Html = rowElement.find("div[data-testonly-column='M4']").html();
            var M5Html = rowElement.find("div[data-testonly-column='M5']").html();
            var M6Html = rowElement.find("div[data-testonly-column='M6']").html();
            var M7Html = rowElement.find("div[data-testonly-column='M7']").html();
            var M8Html = rowElement.find("div[data-testonly-column='M8']").html();
            var M9Html = rowElement.find("div[data-testonly-column='M9']").html();
            var M10Html = rowElement.find("div[data-testonly-column='M10']").html();
            var M11Html = rowElement.find("div[data-testonly-column='M11']").html();
            var M12Html = rowElement.find("div[data-testonly-column='M12']").html();
            if (lineData == undefined) {
                rowElement.find("div[data-testonly-column='M1']").html("<a href='#' title='No Previous Data'>" + M1Html + "</a>");
                rowElement.find("div[data-testonly-column='M2']").html("<a href='#' title='No Previous Data'>" + M2Html + "</a>");
                rowElement.find("div[data-testonly-column='M3']").html("<a href='#' title='No Previous Data'>" + M3Html + "</a>");
                rowElement.find("div[data-testonly-column='M4']").html("<a href='#' title='No Previous Data'>" + M4Html + "</a>");
                rowElement.find("div[data-testonly-column='M5']").html("<a href='#' title='No Previous Data'>" + M5Html + "</a>");
                rowElement.find("div[data-testonly-column='M6']").html("<a href='#' title='No Previous Data'>" + M6Html + "</a>");
                rowElement.find("div[data-testonly-column='M7']").html("<a href='#' title='No Previous Data'>" + M7Html + "</a>");
                rowElement.find("div[data-testonly-column='M8']").html("<a href='#' title='No Previous Data'>" + M8Html + "</a>");
                rowElement.find("div[data-testonly-column='M9']").html("<a href='#' title='No Previous Data'>" + M9Html + "</a>");
                rowElement.find("div[data-testonly-column='M10']").html("<a href='#' title='No Previous Data'>" + M10Html + "</a>");
                rowElement.find("div[data-testonly-column='M11']").html("<a href='#' title='No Previous Data'>" + M11Html + "</a>");
                rowElement.find("div[data-testonly-column='M12']").html("<a href='#' title='No Previous Data'>" + M12Html + "</a>");
            } else {
                rowElement.find("div[data-testonly-column='M1']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M2 + "'>" + M1Html + "</a>");
                rowElement.find("div[data-testonly-column='M2']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M3 + "'>" + M2Html + "</a>");
                rowElement.find("div[data-testonly-column='M3']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M4 + "'>" + M3Html + "</a>");
                rowElement.find("div[data-testonly-column='M4']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M5 + "'>" + M4Html + "</a>");
                rowElement.find("div[data-testonly-column='M5']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M6 + "'>" + M5Html + "</a>");
                rowElement.find("div[data-testonly-column='M6']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M7 + "'>" + M6Html + "</a>");
                rowElement.find("div[data-testonly-column='M7']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M8 + "'>" + M7Html + "</a>");
                rowElement.find("div[data-testonly-column='M8']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M9 + "'>" + M8Html + "</a>");
                rowElement.find("div[data-testonly-column='M9']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M10 + "'>" + M9Html + "</a>");
                rowElement.find("div[data-testonly-column='M10']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M11 + "'>" + M10Html + "</a>");
                rowElement.find("div[data-testonly-column='M11']").html("<a href='#' title='" + lineData.Updated_Date + ": " + lineData.M12 + "'>" + M11Html + "</a>");
                rowElement.find("div[data-testonly-column='M12']").html("<a href='#' title='No Previous Data'>" + M12Html + "</a>");
            }
        });
    }

    $(document).ready(function() {
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
            }
        }).catch(e => console.error(e));

        setTimeout(function(){
           getMonth();
           loadPreviousMonthData();
        },5000);

        setInterval(function(){
           getMonth();
           loadPreviousMonthData();
        },5000);

    });
})();
