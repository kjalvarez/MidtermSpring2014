var data = [
	{
		firstName: 'Jim',
		lastName: 'Smith',
		item: 'Lasagna',
		container: 'Tupperware',
		date: (XDate.today(true)).toString('MMMM d')
	},
	{
		firstName: 'Elizabeth',
		lastName: 'Solomon',
		item: 'Pizza Hot Dish',
		container: 'Ceramic bowl',
		date: (XDate.today(true)).addDays(1).toString('MMMM d')
	},
	{
		firstName: 'Tom',
		lastName: 'Jones',
		item: 'Eggplant Casserole',
		container: 'Red plastic bowl',
		date: (XDate.today(true)).addDays(2).toString('MMMM d')
	}
]