import * as Icons from 'lucide-react';

export default function SimpleAppointmentCard({ title, time, icon }) {
    const Icon = Icons[icon] || Icons.Calendar; // fallback icon
    if (!Icons[icon]) {
        console.warn(`Icon "${icon}" not found in lucide-react`);
    }

    return (
        <div className="bg-blue-50 rounded-xl p-3 flex items-center">
            <Icon className="w-5 h-5 text-blue-500 mr-3" />
            <div>
                <h3 className="text-sm font-medium">{title}</h3>
                <p className="text-xs text-gray-600">{time}</p>
            </div>
        </div>
    );
}
