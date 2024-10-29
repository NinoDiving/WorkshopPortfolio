import "./NavBar.css";

interface NavLink {
	text: string;
	href: string;
}
interface NavBarProps {
	logo: string;
	links: NavLink[];
}

export default function NavBar({ logo, links }: NavBarProps) {
	return (
		<header className="header">
			<nav className="NavBar">
				<img className="logo" src={logo} alt="logo" />
				<ul className="navLinks">
					{links.map((link, index) => (
						<li key={index} className="NavItem">
							<a href={link.href}>{link.text}</a>
						</li>
					))}
				</ul>
			</nav>
			<div className="headerContent">
				<h2 className="title">Stéphanie Awkward</h2>
				<button className="firstButton" type="button">
					Qui suis-je ?
				</button>
			</div>
		</header>
	);
}
