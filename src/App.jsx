import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import DashboardMainContent from './components/DashboardMainContent.jsx';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Static Sidebar (fixed width) */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
