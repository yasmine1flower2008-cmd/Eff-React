import Experts1 from './Expert1.jsx';
import Expert2 from './Expert2.jsx';
import Formulaire from './formulaire.jsx';
import { BrowserRouter, Route, Routes, Link } from 'react-router';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <nav className="bg-indigo-600 text-white p-4 shadow-md mb-6">
                    <div className="max-w-6xl mx-auto flex gap-6 font-semibold">
                        <Link to="/Experts1" className="hover:underline">Experts1</Link>
                        <Link to="/Experts2" className="hover:underline">Experts2</Link>
                        <Link to="/formulaire" className="hover:underline">Formulaire</Link>
                    </div>
                </nav>

                <div className="max-w-6xl mx-auto px-4">
                    <Routes>
                        <Route path="/Experts1" element={<Experts1 />} />
                        <Route path="/Experts2" element={<Expert2 />} />
                        <Route path="/formulaire" element={<Formulaire />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;