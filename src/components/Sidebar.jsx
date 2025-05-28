import { navLinks } from './data/navigation';
import * as Icons from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-700 mb-6">GENERAL</h2>
            <nav className="space-y-4">
                {navLinks.map((link, index) => {
                    const Icon = Icons[link.icon];
                    return (
                        <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${link.name === 'Dashboard' ? 'bg-teal-100 text-teal-600' : 'text-gray-600'}`}>
                            {Icon ? <Icon className="w-5 h-5" /> : <div className="w-5 h-5" />} {/* fallback */}
                            <span>{link.name}</span>
                        </div>
                    );

                })}
            </nav>
        </aside>
    );
}

// export default Sidebar;