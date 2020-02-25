// ==UserScript==
// @name         Bino
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://binomo.com/trading*
// @require      https://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

setInterval( function(){
	if(Number( $('.ratio_positive__1qpzL👳🏾').text().split('%')[0])>=73) $('.button_btn__dCMn2🏌').eq(3).click();
	//if(Number( $('.ratio_positive__1qpzL👳🏾').text().split('%')[0])>=84) $('.button_btn__dCMn2🏌').eq(3).click();

	if(Number( $('.ratio_negative__jvew0👖').text().split('%')[0])>=73) $('.button_btn__dCMn2🏌').eq(4).click();
	//if(Number( $('.ratio_negative__jvew0👖').text().split('%')[0])>=84) $('.button_btn__dCMn2🏌').eq(4).click();
},5*1000);
