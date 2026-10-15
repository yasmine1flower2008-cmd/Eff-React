import Expert from './Expert';
import expertsData from './data'; 

function Experts2() {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Liste des Experts (Experts2)</h2>
            <ul className="list-disc pl-5">
                {expertsData.map((expert, index) => (
                    <Expert key={index} expert={expert} />
                ))}
            </ul>
        </div>
    );
}

export default Experts2;