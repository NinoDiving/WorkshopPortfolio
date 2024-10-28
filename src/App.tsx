
import Competence from "./components/competence/competence";
import NavBar from "./components/competence/NavBar/NavBar";

function App() {
	const navigation=[{
		text: "Accueil",
		href: "#home"
	},
{
	text: "A propos",
	href: "About"
},
{
	text: "Compétences",
	href: "Compétences"
},
{
	text: "Profil",
	href: "Profil"
},
{
	text: "Contact",
	href: "Contact"
}]
	return (
		<>
		<NavBar logo="src/assets/logo-1.png" links={navigation} />
			<Competence />
		</>
	)
}

export default App;
