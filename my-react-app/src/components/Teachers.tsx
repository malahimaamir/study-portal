export default function Teachers() {
  return (
    <section id="teachers" className="py-20 bg-teacher-orange/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-teacher-orange">
            Our Teachers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from experienced educators dedicated to your success and
            academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg border bg-white shadow-md text-center hover:shadow-lg transition-shadow duration-300 border-teacher-orange/20">
            <div className="p-6">
              <div className="w-24 h-24 bg-teacher-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-users w-12 h-12 text-teacher-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-teacher-orange mb-2 text-lg">
                Expert Faculty
              </h3>
              <p className="text-gray-600 text-sm">
                Highly qualified teachers with years of experience in their
                respective fields.
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-white shadow-md text-center hover:shadow-lg transition-shadow duration-300 border-teacher-orange/20">
            <div className="p-6">
              <div className="w-24 h-24 bg-teacher-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-book-open w-12 h-12 text-teacher-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-teacher-orange mb-2 text-lg">
                Subject Specialists
              </h3>
              <p className="text-gray-600 text-sm">
                Dedicated specialists for each subject area ensuring
                comprehensive coverage.
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-white shadow-md text-center hover:shadow-lg transition-shadow duration-300 border-teacher-orange/20">
            <div className="p-6">
              <div className="w-24 h-24 bg-teacher-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-graduation-cap w-12 h-12 text-teacher-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-teacher-orange mb-2 text-lg">
                Mentors & Guides
              </h3>
              <p className="text-gray-600 text-sm">
                Personal mentors to guide you through your educational journey
                and career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
