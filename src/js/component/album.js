import React from "react";
import { Card } from "./card";

export function Album() {
	return (
		<div>
			<div className="album py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<Card
								title="My first imagen"
								description="This imagine is about a cat with a dog"
								img="https://www.zooplus.es/magazine/wp-content/uploads/2019/10/featured-img-2-768x576.jpg"
							/>
						</div>

						<div className="col-md-3">
							<Card
								title="My second imagen"
								description="This imagine is about a tattoo cat"
								img="https://lh3.googleusercontent.com/proxy/MPRjgiebJ9Z1Dv2NlnyBylpd0-HhXC8COxsNF0xSiCnso7fefH4U3g2h3jYgaq_p9byik3SOtGyOTmSDhyYQ2UhVibn7rDXKm-4e4pG0Lavns5jV4nPoLBNU52eodfKGC33y8OrfQC0WYVTAK6tMsdH1QdAHtXkap7_EGKqCYKwX"
							/>
						</div>

						<div className="col-md-3">
							<Card
								title="My third imagen"
								description="This imagine is about a girl with her cat"
								img="https://i.pinimg.com/564x/32/3c/92/323c9276b2c0dd7d2c3a407c6250f880.jpg"
							/>
						</div>

						<div className="col-md-3">
							<Card
								title="My fourth imagen"
								description="This imagine is about a boy with his dog"
								img="https://i.blogs.es/cd8e21/istock_38997540_medium/1366_2000.jpg"
							/>
						</div>

						<div className="col-md-3">
							<Card
								title="My fifth imagen"
								description="This imagine is about a boy dog"
								img="https://i.blogs.es/d099a0/perro/840_560.jpg"
							/>
						</div>

						<div className="col-md-3">
							<Card
								title="My sixth imagen"
								description="This imagine is about a dog in the countryside"
								img="https://verdecora.es/blog/wp-content/uploads/2019/09/como-saber-perro-es-feliz.jpg"
							/>
						</div>

						<div className="col-md-3">
							<Card
								title="My seventh imagen"
								description="This imagine is about 4 friends"
								img="https://aws.traveler.es/prod/designs/v1/assets/940x627/91190.jpg"
							/>
						</div>

						<div className="col-md-3">
							<Card
								title="My eighth imagen"
								description="This imagine is about a women in a train"
								img="https://static.vix.com/es/sites/default/files/styles/1x1/public/v/viajar-en-tren-ventajas-mexico.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
