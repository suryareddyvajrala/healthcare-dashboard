import { activityData } from "../data/appointments";

function ActivityFeed() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Activity</h3>
            <p className="text-gray-500 mb-4">3 appointments on this week</p>
            <div className="flex space-x-2">
                {activityData.map((item, index) => (
                    <div
                        key={index}
                        className="flex-1 bg-gray-200 rounded-lg"
                        style={{ height: `${item.appointments * 20}px` }}
                    />
                ))}
            </div>
        </div>
    );
}

export default ActivityFeed;