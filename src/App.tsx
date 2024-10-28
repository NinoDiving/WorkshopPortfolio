import Citation from "./components/citation/citation";
import NavBar from "./components/competence/NavBar/NavBar";
import Competence from "./components/competence/competence";

function App() {
	const navigation = [
		{
			text: "Accueil",
			href: "#home",
		},
		{
			text: "A propos",
			href: "About",
		},
		{
			text: "Compétences",
			href: "Compétences",
		},
		{
			text: "Profil",
			href: "Profil",
		},
		{
			text: "Contact",
			href: "Contact",
		},
	];
	return (
		<>
			<NavBar logo="src/assets/logo-1.png" links={navigation} />
			<Competence />
			<Citation />
		</>
	);
}

export default App;
