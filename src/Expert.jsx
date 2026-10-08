import Evenements from './Evenements.jsx'; 

function Expert({ expert }) {
    return (
        <div className="rounded-lg shadow-md p-6 mb-6 bg-white border border-gray-300">
            <li className="mb-6 list-disc">
                
                <div className="font-bold text-lg mb-2">
                    {expert.nom_complet}
                </div>

            
            <Evenements evenements={expert.événements} />
         </li>
        </div>

    );
}

export default Expert;