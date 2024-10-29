import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
export default function PortFolio() {
	return (
		<section className="portfolio">
			<h2 id="portfolio">PORTFOLIO</h2>
			<p>
				Ci-dessous, quelques exemples de réalisations effectuées durant la
				formation, le stage et plus encore :
			</p>
			<Carousel className="carousel" interval={3000} showArrows={true}>
				<div className="slide-container">
					<div className="image-pair">
						<div className="image-wrapper">
							<img src="./src/assets/projet1.jpg" alt="" />
						</div>
						<div className="image-wrapper">
							<img src="./src/assets/projet2.jpg" alt="" />
						</div>
					</div>
				</div>
				<div className="slide-container">
					<div className="image-pair">
						<div className="image-wrapper">
							<img src="./src/assets/projet3.jpg" alt="" />
						</div>
						<div className="image-wrapper">
							<img src="./src/assets/projet4.jpg" alt="" />
						</div>
					</div>
				</div>
			</Carousel>
		</section>
	);
}
