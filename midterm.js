function clearFields() {
	$('#firstNameInput').val('');
	$('#lastNameInput').val('');
	$('#itemInput').val('');
	$('#containerInput').val('');
	$('#dateInput').val('');
}

function renderCalendar(div) {
	$('.daySchedule').remove();
	for (i=0; i<data.length; i++) {
		var mealInfo = data[i];
		var mealSource=$('#calendarMealInfo').html();
		var mealTemplate=Handlebars.compile(mealSource);
		div = div.append(mealTemplate(mealInfo));
		$('#errorMessage').hide();
		clearFields();
	}
}

function getValues(array) {
	array[i].firstName=($('#firstNameInput').val());
	array[i].lastName=($('#lastNameInput').val());
	array[i].item=($('#itemInput').val());
	array[i].container=($('#containerInput').val());
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
		e.preventDefault;
		var requestedDate = ($('#dateInput').val());
		console.log(requestedDate);

		var mealAssigned = false;

		for(i=0; i<data.length; i++) {
			if (requestedDate===data[i].date.toString('MMMM dd') && data[i].firstName==='') {
				getValues(data);
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






