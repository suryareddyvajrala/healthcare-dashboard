import DashboardOverview from './DashboardOverview';

function DashboardMainContent() {
    return (
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
            <DashboardOverview />
        </main>
    );
}

export default DashboardMainContent;