function clearFields() {
	$('#firstNameInput').val('');
	$('#lastNameInput').val('');
	$('#itemInput').val('');
	$('#containerInput').val('');
	$('#dateInput').val('');
}

function renderCalendar(div) {
	$('.daySchedule').remove();
	for(var i = 0; i<data.length; i++) {
		var mealInfo = data[i];
		var mealSource=$('#calendarMealInfo').html();
		var mealTemplate=Handlebars.compile(mealSource);
		div = div.append(mealTemplate(mealInfo));
		$('#errorMessage').hide();
		clearFields();
	}
}

function getValues(foodObject) { 
	foodObject.firstName=($('#firstNameInput').val());
	foodObject.lastName=($('#lastNameInput').val());
	foodObject.item=($('#itemInput').val());
	foodObject.container=($('#containerInput').val());
}

$(document).on('ready', function() {

	$("#dateInput").datepicker({ minDate: 0, maxDate: "+7D", dateFormat: "MM d" });

	var date = {
		dateToday: (XDate.today(true)).toString('dddd, MMMM d')
	}

	var source = $('#calendarHeader').html();
	var template=Handlebars.compile(source);

	var newDiv=template(date);

	var currentDateDiv = $('#calendar').append(newDiv);
	renderCalendar(currentDateDiv);

	$('#submitButton').on('click', function (e) {
		e.preventDefault();
		var requestedDate = ($('#dateInput').val());
		console.log(requestedDate);
		

		var mealAssigned = false;

		for(var i = 0; i<data.length; i++) {
			if (requestedDate===data[i].date.toString('MMMM d') && data[i].firstName==='') {
				getValues(data[i]);
				renderCalendar(currentDateDiv);
				mealAssigned = true;
				break; 
			} 
		}

		if (!mealAssigned) {
			$('#errorMessage').show();
		}
	});
});






