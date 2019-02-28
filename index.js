const app = require('express')();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello world.'));

app.listen(port, () => {
	console.log(`Running fast_tracker on port ${port}`);
});
