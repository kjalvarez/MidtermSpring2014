$(document).on('ready', function() {

var date = {
	currentWeek: 'Ee by gum. Nobbut a lad. Tha daft apeth. Nobbut a lad nobbut a lad mardy',
}

var source = $('#calendarData').html();
var template=Handlebars.compile(source);

var newDiv=template(date);

FIGURE OUT HOW TO PUT A DATE IN CURRENT WEEK AREA







var appointment = function(firstName, lastName, foodItem, container, month, day, year) {
	this.firstName= firstName;
	this.lastName=lastName;
	this.foodItem=foodItem;
	this.container=container;
	this.month=month;
	this.day=day;
	this.year=year;

}
