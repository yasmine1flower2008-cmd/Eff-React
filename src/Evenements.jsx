function Evenements({ evenements }) {
   
    const totalGeneral = evenements.reduce(
        (total, evenement) => total + (evenement.cout_journalier * evenement.durée), 
        0
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <table border="2" className="min-w-full bg-white border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-4 py-2">Thème</th>
                        <th className="border border-gray-400 px-4 py-2">Date de début</th>
                        <th className="border border-gray-400 px-4 py-2">Date de fin</th>
                        <th className="border border-gray-400 px-4 py-2">Description</th>
                        <th className="border border-gray-400 px-4 py-2">Coût journalier</th>
                        <th className="border border-gray-400 px-4 py-2">Durée (jours)</th>
                        <th className="border border-gray-400 px-4 py-2">Coût Total Événement</th>
                    </tr>
                </thead>
                <tbody>
                    {evenements.map((evenement, index) => (
                        <tr key={index}>
                            <td className="border border-gray-400 px-4 py-2">{evenement.thème}</td>
                            <td className="border border-gray-400 px-4 py-2">{evenement.date_debut}</td>
                            <td className="border border-gray-400 px-4 py-2">{evenement.date_fin}</td>
                            <td className="border border-gray-400 px-4 py-2">{evenement.description}</td>
                            <td className="border border-gray-400 px-4 py-2">{evenement.cout_journalier} DH</td>
                            <td className="border border-gray-400 px-4 py-2">{evenement.durée}</td>
                            <td className="border border-gray-400 px-4 py-2 font-semibold">
                                {evenement.cout_journalier * evenement.durée} DH
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="7" className="border border-gray-400 px-4 py-3 font-bold bg-gray-50">
                            Total des coûts des événements assurés est : {totalGeneral} DH
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Evenements;