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
	

$('#submitButton').on('click', function (e) {
	e.preventDefault;
	var requestedDate = ($('#dateInput').val());
	console.log(requestedDate);

		for(i=0; i<data.length; i++) {
			if (requestedDate===data[i].date && 
				data[i].firstName==='') {
				data[i].firstName=($('#firstNameInput').val());
				data[i].lastName=($('#lastNameInput').val());
				data[i].item=($('#itemInput').val());
				data[i].container=($('#containerInput').val());
				console.log(data[i]);

				
			} 
			}

	Write a fx to re-render page with new array . . . ?

	}
		 
});


});






