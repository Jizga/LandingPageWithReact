import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div>
				<div className="album py-5">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<Card
									title="My first imagen"
									description="This imagen is about a cat with a dog"
									img="https://www.zooplus.es/magazine/wp-content/uploads/2019/10/featured-img-2-768x576.jpg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
