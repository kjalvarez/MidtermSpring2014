var appointment = function(firstName, lastName, foodItem, container, month, day, year) {
	this.firstName= firstName;
	this.lastName=lastName;
	this.foodItem=foodItem;
	this.container=container;
	this.month=month;
	this.day=day;
	this.year=year;

}

var firstAppt = new appointment('Karin', 'Smith', 'Lasagna', 'Blue Tupperware', 03, 23, 14)