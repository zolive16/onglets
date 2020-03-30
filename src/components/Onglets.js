import React, { useState } from 'react'
import './onglets.css'
import france from '../assets/france.png'
import uk from '../assets/uk.png'

export default function Onglets() {

    const [stateOnglets, setStateOnglets] = useState(1);

    const goFR = () => {
        setStateOnglets(1);
    }

    const goEN = () => {
        setStateOnglets(2);
    }

    return (
        <div>
            <div className="contBtn">
                <div>
                    <img src={france} alt='france'/>
                    <div onClick={goFR} className={`onglets ${stateOnglets === 2 ? 'active' : ''}`} >Français</div>
                </div>
                <div>
                    <img src={uk} alt='uk'/>               
                    <div onClick={goEN} className={`onglets ${stateOnglets === 1 ? 'active' : ''}`}>Anglais</div>
                </div>
            </div>
            <div className="container">
                {stateOnglets === 1 ? 
                    <p className="contenu-fr">
                        Tirez parti des cadres agiles pour fournir un synopsis robuste pour des aperçus de haut niveau. Les approches itératives de la stratégie d'entreprise favorisent la réflexion collaborative pour faire avancer la proposition de valeur globale. Développez de manière organique la vision globale du monde de l'innovation perturbatrice via la diversité et l'autonomisation au travail. <br/><br/>
                        Apportez à la table des stratégies de survie gagnant-gagnant pour assurer une domination proactive. À la fin de la journée, à l'avenir, une nouvelle norme qui a évolué depuis la génération X est sur la piste en direction d'une solution cloud rationalisée. Le contenu généré par l'utilisateur en temps réel aura plusieurs points de contact pour la délocalisation.<br/><br/>
                        Capitalisez sur les fruits bas pour identifier une activité à valeur ajoutée approximative au test bêta. Surmontez la fracture numérique avec des clics supplémentaires de DevOps. L'immersion en nanotechnologie le long de l'autoroute de l'information fermera la boucle en se concentrant uniquement sur les résultats.
                </p>
                    :
                <p className="contenu-en">
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.<br/><br/>
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.<br/><br/>
                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
</p>
                }
            </div>
        </div>
    )
}
