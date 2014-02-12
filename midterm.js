$(document).on('ready', function() {


var date = {
	dateToday: (XDate.today(true)).toDateString(),

}

var source = $('#calendarHeader').html();
var template=Handlebars.compile(source);

var newDiv=template(date);
console.log(newDiv);

	var currentDateDiv = $('#calendar').append(newDiv) 

var infoToday = {
	date: (XDate.today(true)).toString('MMMM d'),
	giver: 'Jim Smith',
	food: 'Lasagna',

}
	var todaySource=$('#calendarTodayInfo').html();
	var todayTemplate=Handlebars.compile(todaySource);

	todayDiv = currentDateDiv.append(todayTemplate(infoToday));

var infoTomorrow = {
	date: (XDate.today(true)).addDays(1).toString('MMMM d'),
	giver: 'Elizabeth Sam',
	food: 'Pizza Hot Dish'
}

	var tomorrowSource = $('#calendarTodayInfo').html();
	var tomorrowTemplate = Handlebars.compile(tomorrowSource);

	tomorrowDiv=todayDiv.append(tomorrowTemplate(infoTomorrow));

var infoTwoDays = {
	date: (XDate.today(true)).addDays(2).toString('MMMM d'),
	giver: 'Tom Jones',
	food: 'Eggplant Casserole'
}

	var tomorrowSource = $('#calendarTodayInfo').html();
	var twoDaysTemplate = Handlebars.compile(tomorrowSource);

	twoDaysDiv = tomorrowDiv.append(twoDaysTemplate(infoTwoDays));

});






