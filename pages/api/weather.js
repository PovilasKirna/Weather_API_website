export default async function getWeather(req, res) {
	const { city } = JSON.parse(req.body);
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API}&units=metric`;

	var response = await fetch(url);
	var data = await response.json();
	res.status(200).json(data);
	console.log("Fetched weather data for: " + city);
}
