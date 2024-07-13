import express from 'express';

const router = express.Router();

const cars = [
	{
		id: 1,
		make: 'Toyota',
		model: 'Camry',
		year: 2021,
		color: 'blue',
		price: 30000,
		description: 'A great car'
	},
	{
		id: 2,
		make: 'Honda',
		model: 'Civic',
		year: 2020
	}
];
// router code here, all routes will be prefixed with /cars
router.get('/', (req, res) => {
	// router code here
	res.send(cars);
});

export default router;
