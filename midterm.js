function renderCalendar(currentDateDiv) {
	$('.daySchedule').remove();
	for (i=0; i<data.length; i++) {
		var mealInfo = data[i];
		var mealSource=$('#calendarMealInfo').html();
		var mealTemplate=Handlebars.compile(mealSource);
		currentDateDiv = currentDateDiv.append(mealTemplate(mealInfo));
	}
}

$(document).on('ready', function() {

	$("#dateInput").datepicker({ dateFormat: "MM d"});

	var date = {
		dateToday: (XDate.today(true)).toString('dddd, MMMM d')
	}

	var source = $('#calendarHeader').html();
	var template=Handlebars.compile(source);

	var newDiv=template(date);

	var currentDateDiv = $('#calendar').append(newDiv);
	renderCalendar(currentDateDiv);

	$('#submitButton').on('click', function (e) {
		e.preventDefault;
		var requestedDate = ($('#dateInput').val());
		console.log(requestedDate);

		var mealAssigned = false;

		for(i=0; i<data.length; i++) {
			if (requestedDate===data[i].date.toString() && data[i].firstName==='') {
				data[i].firstName=($('#firstNameInput').val());
				data[i].lastName=($('#lastNameInput').val());
				data[i].item=($('#itemInput').val());
				data[i].container=($('#containerInput').val());
				console.log(data[i]);
				renderCalendar(currentDateDiv);
				mealAssigned = true;
				break; 
			} 
		}

		if (!mealAssigned) {
			alert('Please enter another date.');
		}

	});
});






