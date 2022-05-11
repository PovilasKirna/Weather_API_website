import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

export default function WeatherCard({ imageCode, description, temp, city }) {
	return (
		<Card sx={{ maxWidth: 250, margin: "1rem" }}>
			<CardActionArea
				sx={{
					display: "flex",
					flexDirection: "column",
					allignItems: "center",
					justifyItems: "center",
				}}
			>
				<Image
					width="100%"
					height="100%"
					src={`/images/weather_icons/${imageCode}.svg`}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{city}, {Math.floor(temp)} &#8451;
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description.charAt(0).toUpperCase() + description.slice(1)}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
