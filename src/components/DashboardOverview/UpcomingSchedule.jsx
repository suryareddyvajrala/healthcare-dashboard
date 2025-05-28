import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingSchedule } from '../data/appointments';

function UpcomingSchedule() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 text-black">The Upcoming Schedule</h2>
            {upcomingSchedule.map((schedule, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-sm font-medium text-gray-600">{schedule.day}</h3>
                    <div className="mt-2 space-y-2">
                        {schedule.appointments.map((appt, idx) => (
                            <SimpleAppointmentCard key={idx} {...appt} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default UpcomingSchedule;