import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

function DashboardOverview() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <AnatomySection />
                </div>
                <HealthStatusCards />
                <CalendarView />
            </div>
            <div className="space-y-6">
                <UpcomingSchedule />
                <ActivityFeed />
            </div>
        </div>
    );
}

export default DashboardOverview;