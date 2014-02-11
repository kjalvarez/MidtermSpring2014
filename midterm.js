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
	date: (XDate.today(true)).toDateString(),
	giver: 'Jim Smith',
	food: 'Lasagna',

}
	var todaySource=$('#calendarInfo').html();
	var todayTemplate=Handlebars.compile(todaySource);

	todayDiv = currentDateDiv.append(todayTemplate(infoToday));




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
