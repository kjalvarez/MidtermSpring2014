$(document).on('ready', function() {


	var date = {
		dateToday: (XDate.today(true)).toDateString(),

	}

	var source = $('#calendarHeader').html();
	var template=Handlebars.compile(source);

	var newDiv=template(date);

	var currentDateDiv = $('#calendar').append(newDiv);

	for (i=0; i<data.length; i++) {
		var mealInfo = data[i];
		var mealSource=$('#calendarMealInfo').html();
		var mealTemplate=Handlebars.compile(mealSource);
		currentDateDiv = currentDateDiv.append(mealTemplate(mealInfo));
	}

	NEXT STEP: GIVE DATES W/ NO MEAL A BLANK VALUE; SCHEDULE MEAL IF BLANK.  

	
});






