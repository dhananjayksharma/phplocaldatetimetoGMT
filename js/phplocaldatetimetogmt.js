$(document).ready(function(){
	var currentTime = getLocalDateTimewithTimezone(getCurrentDateTime());
	$("#campaignscheduledatetimeId").datetimepicker({ minDate:0});
});

function showError(errShowId, errInId, errMsg){ 
	try{
		$('#'+errShowId).html(errMsg);
		$('#'+errShowId).attr('class', 'colorRed');
	}
	catch (e){ 
		
	}
	
	try { 
		document.getElementById(errInId).focus(); 
	}
	catch (e){
		
	}
}

function validateEmailId(emailVal){  
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
	var isError = false;  
	if(reg.test(emailVal) == true) {
		return true;
	}
	else {
		return false;
	}
}


function IsValidGroupName(sText){
	/* return true; // validation removed on 04-04-2013 */
	var regExpChars = /^[a-zA-Z0-9\s_',.&();|+]+$/;
	isValidCode = regExpChars.test(sText); 
	return isValidCode;
}


function IsValidStoreName(sText){
	var regExpChars = /^[a-zA-Z0-9]+$/;
	isValidCode = regExpChars.test(sText); 
	return isValidCode;
}

//remove space
function removeSpaces(str){
	var tt =  str.replace(/^\s+|\s+$/g,'');
	return tt;
}
//

//required data
function strRequired(str){
	var str1 = removeSpaces(str);
	return str1; //return blank number
}
  
function getCurrentDateTime(){
  	displayTime =  getCurrentTime();
  	displayDate =  getCurrentDate();
  	displayDateTime = displayDate + ' ' + displayTime;
	return displayDateTime;
}

function getCurrentDateTimeBlank(){ 
	return '';
}

function getCurrentDateTimeEndOfDay(){
  	displayTime =  getEndOfDayTime();
  	displayDate =  getCurrentDate();
  	displayDateTime = displayDate + ' ' + displayTime;
	return displayDateTime;
}

function getEndOfDayTime(){
	return '23:59:00'; 
}

function getCurrentTime(){
	var myDate = new Date();
	var displayTime = myDate.getHours()+':' + myDate.getMinutes()+':' + myDate.getSeconds(); 
	return displayTime;
}

function getCurrentDateMysqlFormat(){
	var myDate = new Date(); 
	var displayDate = myDate.getFullYear()  + '-' +  (myDate.getMonth()+1) + '-' + (myDate.getDate());
	return displayDate;
}

function getCurrentDate(){
	var myDate = new Date(); 
	var displayDate = (myDate.getMonth()+1) + '/' + (myDate.getDate()) + '/' + myDate.getFullYear();
	return displayDate;
}

function getLocalDateTimewithTimezone(dateTime){
	//Wed Jun 27 2012 15:15:57 GMT+0845 (CWST)
	var localTimeZoneDate = new Date(dateTime);
	localTimeZoneDate = localTimeZoneDate.toLocaleString();
	return localTimeZoneDate;
}
    
function getGMTTimezoneOffset(){
    var current_date = new Date();
	var gmt_offset = current_date.getTimezoneOffset( ) / 60;
	var currentTime = getLocalDateTimewithTimezone(getCurrentDateTime());
		
	try{
		$("#timezoneOffset").value = gmt_offset; 
	}
	catch (err){
		
	}

	$("#campaignCreationDateTimeAndZoneId").text(currentTime);
	$("#currentDateId").value = getCurrentDate();
}

