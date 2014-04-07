var data = [
{
	firstName: 'Jennifer',
	lastName: 'Sutton',
	item: 'Lasagna',
	container: 'Tupperware',
	date: XDate.today(true)
},
{
	firstName: '',
	lastName: '',
	item: '',
	container: '',
	date: XDate.today(true).addDays(1)
},
{
	firstName: 'Tom',
	lastName: 'Jones',
	item: 'Enchiladas',
	container: 'Red plastic bowl',
	date: XDate.today(true).addDays(2)
},
{ 
	firstName: '',
	lastName: '',
	item: '',
	container: '',
	date: XDate.today(true).addDays(3)

},
{ 
	firstName: '',
	lastName: '',
	item: '',
	container: '',
	date: XDate.today(true).addDays(4)

},
{ 
	firstName: 'Bill',
	lastName: 'Humphrey',
	item: 'Meatloaf',
	container: 'Metal pan',
	date: XDate.today(true).addDays(5)

},
{ 
	firstName: 'Elizabeth',
	lastName: 'Katz',
	item: 'Chicken soup',
	container: 'Crock pot',
	date: XDate.today(true).addDays(6)

},
{ 
	firstName: '',
	lastName: '',
	item: '',
	container: '',
	date: XDate.today(true).addDays(7)

}
]

Handlebars.registerHelper('date', function() {
	return this.date.toString('dddd, MMMM d')
})



