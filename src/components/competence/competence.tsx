import "./competenceData";
import ProgressBar from "./progressBar";
import "./style.css";

export default function Competence() {
	return (
		<section className="skills">
			<h2>Compétences</h2>
			<p>
				Elles sont en constantes améliorations car pour moi la joie de ce métier
				fait que l’on en apprend tous les jours, d’autant plus en étant
				impliqué, curieux et passionné.
			</p>
			<section className="imgSkills">
				<article className="skillsProgress">
					<ProgressBar />
				</article>
				<figure>
					<img
						id="skill"
						className="stephProfil"
						src="./src/assets/stephPic.jpg"
						alt=""
					/>
					<a
						className="downloadPic"
						href="./src/assets/cvStef.png"
						download="cvStef.png"
					>
						Télécharger mon CV
					</a>
				</figure>
			</section>
		</section>
	);
}
