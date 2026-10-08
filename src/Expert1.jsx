import Expert from './Expert.jsx';
import expertsData from './data.js';

function Experts1() {
    return (
        <div>
            <ul className="list-disc pl-5">
                {expertsData.map((expert, i) => (
                    <Expert key={i} expert={expert} />
                ))}
            </ul>
        </div>
    );
}

export default Experts1;