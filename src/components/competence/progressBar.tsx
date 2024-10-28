import { useEffect, useState } from "react";
import { competenceData } from "./competenceData";

interface CompetenceProps {
	label: string;
	progress: number;
}

function SingleProgress({ label, progress }: CompetenceProps) {
	const [currentProgress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			if (currentProgress < progress) {
				setProgress((prev) => Math.min(prev + 1, progress));
			}
		}, 30);
		return () => clearTimeout(timer);
	}, [currentProgress, progress]);
	return (
		<article className="skillsProgress">
			<label htmlFor={label}>{label.toLocaleUpperCase()}</label>
			<progress id={label} max="100" value={currentProgress}>
				{currentProgress}%
			</progress>
		</article>
	);
}

export default function ProgressBar() {
	return (
		<>
			{competenceData.map((competence) => (
				<SingleProgress
					key={competence.label}
					label={competence.label}
					progress={competence.progress}
				/>
			))}
		</>
	);
}
