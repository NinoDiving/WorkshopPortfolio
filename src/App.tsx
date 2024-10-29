import Form from "./components/Form/form";
import Citation from "./components/citation/citation";
import NavBar from "./components/competence/NavBar/NavBar";
import Competence from "./components/competence/competence";
import FooterPage from "./components/footer/footer";
import AboutMe from "./components/AboutMe";
import ActualPost from "./components/ActualPost";  


import PortFolio from "./components/portfolio/portfolio";

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
			href: "#skill",
		},
		{
			text: "Portfolio",
			href: "#portfolio",
		},
		{
			text: "Contact",
			href: "#contact",
		},
	];
	const formFields = [
		{
			label: "Nom",
			name: "name",
			type: "text",
			placeholder: "Entrez votre nom",
		},
		{
			label: "Email",
			name: "email",
			type: "email",
			placeholder: "Entrez votre email",
		},
		{
			label: "Téléphone",
			name: "phone",
			type: "tel",
			placeholder: "Entrez votre numéro de téléphone",
		},
		{
			label: "Objet",
			name: "objet",
			type: "objet",
			placeholder: "Objet",
		},
		{
			label: "Message",
			name: "message",
			type: "text",
			placeholder: "Entrez votre message",
		},
	];
	return (
		<>

			<NavBar logo="./src/assets/logo-1.png" links={navigation} />
		  <Competence />
			<Citation />
			<PortFolio />
			<AboutMe/>
			<ActualPost/>
			<Form fields={formFields} />
			<FooterPage />
		</>
	);
}

export default App;
