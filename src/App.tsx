import Form from "./components/Form/form";
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
			<NavBar logo="./src/assets/Untitled design.png" links={navigation} />
			<Competence />
			<Citation />
			<Form fields={formFields} />
		</>
	);
}

export default App;
