import "./styles.css";

interface FormField {
	label: string;
	name: string;
	type: string;
	placeholder?: string;
}

interface FormProps {
	fields: FormField[];
}

function Form({ fields }: FormProps) {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} id="contact" className="simple-form">
			{fields.map((field) => (
				<div key={field.name} className="form-group">
					<label htmlFor={field.name}>{field.label}</label>
					<input
						id={field.name}
						name={field.name}
						type={field.type}
						placeholder={field.placeholder}
						className="form-input"
					/>
				</div>
			))}
			<button type="submit" className="submit-button">
				Envoyer
			</button>
		</form>
	);
}

export default Form;
