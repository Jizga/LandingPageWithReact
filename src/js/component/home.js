import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Album } from "./album";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Album />
		</div>
	);
}
