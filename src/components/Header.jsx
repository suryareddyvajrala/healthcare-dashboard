import { Search, Bell, Plus } from 'lucide-react';

function Header() {
    return (
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-teal-500">Healthcare.</h1>
                <div className="ml-6 flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent ml-2 outline-none"
                        disabled
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Bell className="w-6 h-6 text-gray-600" />
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
                        JD
                    </div>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded-full">
                    <Plus className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
}

export default Header;