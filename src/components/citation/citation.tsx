import { useEffect, useState } from "react";
import { citations } from "./citationData";
import "./style.css";

export default function Citation() {
	const [citationIndex, setCitation] = useState(0);
	const [isPaused, setPaused] = useState(false);
	const playHandleClick = () => {
		setPaused((prev) => !prev);
	};
	useEffect(() => {
		if (isPaused) return;
		const timer = setInterval(() => {
			setCitation((prev) => (prev === citations.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(timer);
	}, [isPaused, citations.length]);

	return (
		<article className="citation">
			<h3 style={{ color: "black", opacity: "0.6" }}>
				Mes citations préférées :{" "}
			</h3>
			<p>{citations[citationIndex].description}</p>
			<p style={{ color: "black", opacity: "0.5" }}>
				{citations[citationIndex].name}
			</p>
			<button type="button" className="nextQuote" onClick={playHandleClick}>
				{isPaused ? "▶️" : "⏸️"}
			</button>
		</article>
	);
}
