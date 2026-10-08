import Evenements from './Evenements.jsx';
import Expert from './Expert.jsx';
import expertsData from './data.js';
import Experts1 from './Expert1.jsx';
import Formulaire from './formulaire.jsx';


function App() {
    const listeEvenementsExpert = expertsData[0]["événements"];

    return (
      <>
        <div>
            <Evenements evenements={listeEvenementsExpert} />
        </div>

        <div className="p-6 max-w-6xl mx-auto rounded-lg shadow-md p-6 mb-6 bg-white border border-blue-300">
            <ul>
                {expertsData.map((expert,i) => (
                    <Expert key={i} expert={expert} />
                ))}
            </ul>
        </div>

        <div className="p-6 max-w-6xl mx-auto rounded-lg shadow-md p-6 mb-6 bg-white border border-violet-900">
            <Experts1 />
        </div>

        <Formulaire />
      </>
    );
}

export default App;