import React from 'react'
import InscriptionForm from './InscriptionForm'
import ListeInscriptions from './ListeInscription'

const App = () => {
  return (
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Inscriptionform">Inscription Form</Link>
            </li>
            <li>
              <Link to="/Listeinscription">Liste des Inscriptions</Link>
            </li>
          </ul>
        </nav>
         </div>
  );
};

export default App;