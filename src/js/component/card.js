import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="container mt-5">
			<div className="card">
				<img
					className="card-img-top"
					src={props.img}
					alt="Card image cap"></img>

				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	img: PropTypes.string
};
