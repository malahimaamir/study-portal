export default function ClassSchedule() {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Class Schedule
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Well-organized schedule designed to optimize your learning
            experience and time management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="p-6 flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">Morning Classes</h3>
              <p className="text-gray-600 mb-2">8:00 AM - 12:00 PM</p>
              <p className="text-sm text-gray-500">
                Core subjects and theoretical sessions
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="p-6 flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">
                Afternoon Sessions
              </h3>
              <p className="text-gray-600 mb-2">1:00 PM - 5:00 PM</p>
              <p className="text-sm text-gray-500">
                Practical sessions and lab work
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="p-6 flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">Evening Programs</h3>
              <p className="text-gray-600 mb-2">6:00 PM - 9:00 PM</p>
              <p className="text-sm text-gray-500">
                Special programs and extra activities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
