import { calendarAppointments, appointmentDetails } from '../data/appointments';

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

function CalendarView() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-black">This Week</h2>
                <span className="text-gray-600">October 2025</span>
            </div>

            {/* Side-by-side layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Calendar Appointments */}
                <div>
                    <h3 className="text-md font-bold text-black mb-2">Calendar</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {Object.entries(calendarAppointments).map(([date, times], index) => (
                            <div key={index} className="p-3 border rounded-lg bg-gray-50">
                                <p className="text-sm font-medium text-black">{formatDate(date)}</p>
                                <div className="flex flex-col gap-1 mt-2">
                                    {times.map((time, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 w-fit"
                                        >
                                            {time}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Appointment Details */}
                <div>
                    <h3 className="text-md font-bold text-black mb-2">Appointments</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {appointmentDetails.map((appt, index) => (
                            <div key={index} className="bg-blue-50 rounded-xl p-4">
                                <h4 className="text-md font-semibold text-black">{appt.title}</h4>
                                <div className="flex justify-between text-sm text-gray-700 mt-2">
                                    <span>{appt.name}</span>
                                    <span>{appt.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarView;
