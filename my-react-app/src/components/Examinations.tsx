export default function Examinations() {
  return (
    <section id="exam" className="py-20 bg-exam-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black/80">
            Examinations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive examination system designed to assess and validate
            your knowledge effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Regular Tests",
              desc: "Weekly assessments to track progress",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-exam-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              ),
              link: "/regular-tests",
            },
            {
              title: "Mid-Term Exams",
              desc: "Comprehensive mid-semester evaluations",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-exam-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              ),
              link: "/mid-term-exams",
            },
            {
              title: "Final Exams",
              desc: "Year-end comprehensive assessments",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-exam-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              ),
              link: "/final-exams",
            },
            {
              title: "Online Tests",
              desc: "Digital assessment platform",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-exam-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              ),
              link: "/online-tests",
            },
          ].map((card, i) => (
            <a key={i} href={card.link} className="h-full">
              <div className="h-full rounded-lg border bg-sky-100 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border-sky-300 cursor-pointer flex flex-col">
                <div className="p-6 flex-1 flex flex-col items-center">
                  <div className="w-16 h-16 bg-exam-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-exam-blue mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-700">{card.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
