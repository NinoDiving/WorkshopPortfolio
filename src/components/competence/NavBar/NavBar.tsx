import { useState } from "react";
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
    <header>
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
      <h2 className="A_Propos">Stéphanie Awkward</h2>
      <p className="A_Propos">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, eveniet
        eaque ducimus voluptas ullam in consectetur minima neque, quaerat enim
        alias, ad dolorem.
      </p>
      <button className="firstButton" type="button">
        Qui suis-je ?
      </button>
    </header>
  );
}
