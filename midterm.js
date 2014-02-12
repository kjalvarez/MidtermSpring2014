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
	giver: 'Elizabeth Soloman',
	food: 'Pizza Hot Dish'
}

	var tomorrowSource = $('#calendarTomorrowInfo').html();
	var tomorrowTemplate = Handlebars.compile(tomorrowSource);

	tomorrowDiv=todayDiv.append(tomorrowTemplate(infoTomorrow));



});









var appointment = function(firstName, lastName, foodItem, container, month, day, year) {
	this.firstName= firstName;
	this.lastName=lastName;
	this.foodItem=foodItem;
	this.container=container;
	this.month=month;
	this.day=day;
	this.year=year;

}
