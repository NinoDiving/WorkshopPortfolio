import React, { useState } from 'react';
import './AboutMe.css';
import photo1 from './assets/ordi_bureau.png';
import photo2 from './assets/serveurs.png';

const AboutMe = () => {
    const [isAlternate, setIsAlternate] = useState(false);
    const [isFading, setIsFading] = useState(false);

    const handleNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsAlternate(true);
            setIsFading(false);
        }, 500);
    };

    const handlePrevious = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsAlternate(false);
            setIsFading(false);
        }, 500);
    };

    return (
        <section className="about-me-container">
            <h2>À propos de moi</h2>
            <figure className={`content ${isFading ? 'fade' : ''}`}>
                <img src={isAlternate ? photo2 : photo1} alt="Profile" className="profile-image" />
                <figcaption className="text-block">
                    <p>
                        {isAlternate
                            ? "Je travaille aujourd'hui à la NiNIMaF et je suis tres fière d'apporter mes compétences au sein de cette structure"
                            : "Bonjour, je m'apelle Stephanie Akwards. J'ai suivi un cursus de développeur Web Full-Stack qui m'a ouvert les portes du monde du Digital. Je suis aujourd'hui Web-Developpeur senior."
                        }
                    </p>
                </figcaption>
            </figure>
            <div className="buttons">
                {isAlternate && <button onClick={handlePrevious}>Précédent</button>}
                {!isAlternate && <button onClick={handleNext}>Suivant</button>}
            </div>
        </section>
    );
};

export default AboutMe;

