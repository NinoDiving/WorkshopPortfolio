import { useState } from "react";
import { citations } from "./citationData";
import "./style.css";

export default function Citation() {
	const [citationIndex, setCitationIndex] = useState(0);
	const handleClick = () => {
		setCitationIndex((prevIndex) =>
			prevIndex === citations.length - 1 ? 0 : prevIndex + 1,
		);
	};
	return (
		<article className="citation">
			<h3 style={{ color: "#54494B", opacity: "0.8" }}>
				Mes citations préférées :{" "}
			</h3>
			<p>{citations[citationIndex].description}</p>
			<p style={{ color: "black", opacity: "0.7" }}>
				{citations[citationIndex].name}
			</p>
			<button type="button" className="nextQuote" onClick={handleClick}>
				Next ➡️
			</button>
		</article>
	);
}
