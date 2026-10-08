import { useState } from 'react';
import expertsData from './data.js';

function Formulaire() {
    const [theme, setTheme] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");
    const [cout, setCout] = useState("");
    const [expert, setExpert] = useState(expertsData[0]?.nom_complet || "");
    const [afficher, setAfficher] = useState(false);

    
    const duree = ((new Date(dateFin) - new Date(dateDebut)) / (1000 * 60 * 60 * 24)) + 1;
    const coutTotal = cout * duree;

    return (
        <div className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 mt-6">
            <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">Formulaire de l'événement</h3>
            
            <div className="space-y-4">
                
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Thème :</label>
                    <input 
                        type="text" 
                        value={theme} 
                        onChange={(e) => setTheme(e.target.value)} 
                        placeholder="Ex: Développement web"
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                    />
                </div>

               
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Date de début :</label>
                    <input 
                        type="date" 
                        value={dateDebut} 
                        onChange={(e) => setDateDebut(e.target.value)} 
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                    />
                </div>

               
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Date de fin :</label>
                    <input 
                        type="date" 
                        value={dateFin} 
                        onChange={(e) => setDateFin(e.target.value)} 
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                    />
                </div>

               
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Coût :</label>
                    <input 
                        type="number" 
                        value={cout} 
                        onChange={(e) => setCout(e.target.value)} 
                        placeholder="Ex: 500" 
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                    />
                </div>

               
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Expert :</label>
                    <select 
                        value={expert} 
                        onChange={(e) => setExpert(e.target.value)} 
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    >
                        {expertsData.map((exp, i) => (
                            <option key={i} value={exp.nom_complet}>{exp.nom_complet}</option>
                        ))}
                    </select>
                </div>

                
                <button 
                    onClick={() => setAfficher(true)} 
                    className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md cursor-pointer"
                >
                    Confirmer
                </button>
            </div>

            
            {afficher && (
                <p className="mt-6 p-4 border border-indigo-100 bg-indigo-50 rounded-lg text-sm text-indigo-900 shadow-inner">
                    L'expert {expert} assurera le thème : {theme} avec un coût journalier : {cout} DH, pour une durée de : {duree > 0 ? duree : 1} jours, soit un coût total de : {coutTotal > 0 ? coutTotal : cout} DH
                </p>
            )}
        </div>
    );
}

export default Formulaire;