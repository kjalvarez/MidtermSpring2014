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
		dateToday: (XDate.today(true)).toDateString()
	}

	var source = $('#calendarHeader').html();
	var template=Handlebars.compile(source);

	var newDiv=template(date);

	var currentDateDiv = $('#calendar').append(newDiv);
	renderCalendar(currentDateDiv);

<<<<<<< HEAD
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

    write function to re-render array . . .
} 
}



}

});
=======
	$('#submitButton').on('click', function (e) {
		e.preventDefault;
		var requestedDate = ($('#dateInput').val());
		console.log(requestedDate);

		var mealAssigned = false;

		for(i=0; i<data.length; i++) {
			if (requestedDate===data[i].date && data[i].firstName==='') {
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
>>>>>>> 547871cbb6dd5de6ead03806fbde091fd654c077

		if (!mealAssigned) {
			alert('Please enter another date.');
		}

	});
});






