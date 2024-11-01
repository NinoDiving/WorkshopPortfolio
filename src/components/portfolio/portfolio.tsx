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
			<Carousel className="carousel" showArrows={true}>
				<div className="projetContainer">
					<img src="./src/assets/projet1.jpg" alt="" />
				</div>
				<div className="projetContainer">
					<img src="./src/assets/projet2.jpg" height="80%" alt="" />
				</div>
				<div className="projetContainer">
					<img src="./src/assets/projet3.jpg" alt="" />
				</div>
				<div className="projetContainer">
					<img src="./src/assets/projet4.jpg" alt="" />
				</div>
			</Carousel>
		</section>
	);
}
