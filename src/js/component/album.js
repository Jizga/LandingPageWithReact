import React from "react";
import { Card } from "./card";
import { data } from "../data";

export function Album() {
	const listCard = data.map(d => {
		return (
			<div key={d.id} className="col-md-3">
				<Card title={d.title} description={d.description} img={d.img} />
			</div>
		);
	});

	return (
		<div className="album py-5">
			<div className="container">
				<div className="row">{listCard}</div>
			</div>
		</div>
	);
}
