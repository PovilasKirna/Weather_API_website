import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Paper, Modal, IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";

async function fetchWeather(city) {
	try {
		const response = await fetch(
			"https://weather-api-website.vercel.app/api/weather",
			{
				method: "POST",
				body: JSON.stringify({ city }),
			}
		);
		return await response.json();
	} catch (FetchError) {
		try {
			const response = await fetch("http://localhost:3000/api/weather", {
				method: "POST",
				body: JSON.stringify({ city }),
			});
			return await response.json();
		} catch (FetchError) {
			console.log(FetchError);
		}
	}
}

const Home = ({ kaunas, gronau, austin }) => {
	const [currentWeather, setCurrentWeather] = useState({});
	const [showWeather, setShowWeather] = useState(true);

	function handleKeyPress(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			validateSearch();
		}
	}

	async function validateSearch() {
		var search = document.getElementById("search").value;
		var regex = /^[a-zA-Z ]+$/;
		//validate search for only letters and spaces
		if (search == "") {
			return;
		}
		if (!regex.test(search)) {
			alert("Please enter only letters and spaces");
			return;
		}

		await fetchWeather(search).then((data) => {
			setCurrentWeather(data);
			setShowWeather(false);
		});
	}

	return (
		<Container maxWidth="lg">
			<motion.div
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 1 }}
			>
				<Box
					sx={{
						bgcolor: "#cfe8fc",
						display: "flex",
						height: "100vh",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							width: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							fontSize: "2rem",
						}}
					>
						Simple Weather API data display website
					</Box>
					<Paper
						elevation={3}
						component="form"
						href="./currentWeather"
						sx={{
							p: "2px 4px",
							display: "flex",
							alignItems: "center",
							width: 400,
						}}
					>
						<InputBase
							placeholder="Search the city"
							sx={{ ml: 1, flex: 1 }}
							autoFocus
							autoComplete="off"
							id="search"
							onKeyPress={handleKeyPress}
						/>
						<IconButton
							type="button"
							aria-label="search"
							onClick={validateSearch}
						>
							<SearchIcon />
						</IconButton>
					</Paper>
					{kaunas && ( //&& gronau && austin &&
						<AnimatePresence exitBeforeEnter>
							{showWeather && (
								<motion.div
									initial={{ opacity: 0, x: -1000 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.6, duration: 1, type: "spring" }}
									exit={{ opacity: 0, x: 1000 }}
									style={{
										marginTop: 10,
										display: "flex",
										flexDirection: "row",
									}}
									key="initialWeather"
								>
									<WeatherCard
										imageCode={kaunas.weather[0].icon}
										city={kaunas.name}
										temp={kaunas.main.temp}
										description={kaunas.weather[0].description}
									/>
									<WeatherCard
										imageCode={gronau.weather[0].icon}
										city={gronau.name}
										temp={gronau.main.temp}
										description={gronau.weather[0].description}
									/>
									<WeatherCard
										imageCode={austin.weather[0].icon}
										city={austin.name}
										temp={austin.main.temp}
										description={austin.weather[0].description}
									/>
								</motion.div>
							)}
							{!showWeather && (
								<motion.div
									initial={{ opacity: 0, x: -1000 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1, type: "spring" }}
									key="searchWeathe"
								>
									<WeatherCard
										imageCode={currentWeather.weather[0].icon}
										city={currentWeather.name}
										temp={currentWeather.main.temp}
										description={currentWeather.weather[0].description}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					)}
				</Box>
			</motion.div>
		</Container>
	);
};

Home.getInitialProps = async (ctx) => {
	return {
		kaunas: await fetchWeather("kaunas"),
		gronau: await fetchWeather("gronau"),
		austin: await fetchWeather("austin"),
	};
};

export default Home;
