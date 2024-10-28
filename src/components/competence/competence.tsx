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
					<h4>Back-end</h4>
					<label htmlFor="php">PHP</label>
					<progress id="php" max="100" value="82">
						82%%
					</progress>
					<label htmlFor="sql">SQL</label>
					<progress id="sql" max="100" value="80">
						80%
					</progress>
					<label htmlFor="symfony">SYMFONY</label>
					<progress id="php" max="100" value="63">
						63%
					</progress>
					<label htmlFor="">CODEIGNITER</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
					<label htmlFor="smarty">SMARTY</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
					<h4>Front-end</h4>
					<label htmlFor="smarty">SMARTY</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
					<label htmlFor="smarty">SMARTY</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
					<label htmlFor="smarty">SMARTY</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
					<h4>CMS</h4>
					<label htmlFor="smarty">SMARTY</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
					<label htmlFor="smarty">SMARTY</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
					<label htmlFor="smarty">SMARTY</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
					<h4>Divers</h4>
					<label htmlFor="smarty">SMARTY</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
					<label htmlFor="smarty">SMARTY</label>
					<progress id="php" max="100" value="60">
						60%
					</progress>
				</article>
				<figure>
					<img className="stephProfil" src="./src/assets/stephPic.jpg" alt="" />
					<a
						className="downloadPic"
						href="./src/assets/stephPic.jpg"
						download="stephPic.jpg"
					>
						Télécharger ma photo
					</a>
				</figure>
			</section>
		</section>
	);
}
