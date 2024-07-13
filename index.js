import bodyParser from 'body-parser';
import express from 'express';
import carsRoutes from './routes/cars.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/cars', carsRoutes);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
