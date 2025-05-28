import { healthStatus } from '../data/healthData';

function HealthStatusCards() {
    return (
        <div className="space-y-4">
            {healthStatus.slice(1).map((status, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm p-4 flex items-center">
                    <div className={`w-8 h-8 ${status.color} rounded-full mr-4`}></div>
                    <div>
                        <h3 className="text-lg font-semibold">{status.part}</h3>
                        <p className="text-sm text-gray-500">Date: {status.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HealthStatusCards;