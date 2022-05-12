import React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";

export default function MyApp(props) {
	const { Component, pageProps } = props;

	return (
		<React.Fragment>
			<style jsx global>{`
				body {
					padding: 0;
					margin: 0;
					background-color: #cfe8fc;
					height: 100vh;
					width: 100vw;
				`}</style>
			<Head>
				<title>Weather - PK</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link
					rel="icon"
					type="image/png"
					href="images/favicons/touch-icon-16x16.png"
				/>
				<link
					rel="icon"
					type="image/png"
					href="images/favicons/touch-icon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					href="images/favicons/touch-icon-48x48.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="images/favicons/apple-touch-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="images/favicons/apple-touch-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="images/favicons/apple-touch-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="images/favicons/apple-touch-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="images/favicons/apple-touch-icon-180x180.png"
				/>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<CssBaseline />
			<Component {...pageProps} />
		</React.Fragment>
	);
}
