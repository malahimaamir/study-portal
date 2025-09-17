
export default function SectionsContent() {
  return (
    <section id="studyplan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Study Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Structured learning paths designed to help you achieve your educational goals efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm shadow-card hover:shadow-elegant transition-shadow duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-book-open w-12 h-12 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Foundation Course
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 mb-4">
                Build strong fundamentals with our comprehensive foundation program.
              </p>
              <a href="/foundation-course">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full transition-colors">
                  View Details
                </button>
              </a>
            </div>
          </div>

   
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm shadow-card hover:shadow-elegant transition-shadow duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-graduation-cap w-12 h-12 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Advanced Program
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 mb-4">
                Advanced coursework for experienced learners seeking specialization.
              </p>
              <a href="/advanced-program">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full transition-colors">
                  View Details
                </button>
              </a>
            </div>
          </div>


          <div className="rounded-lg border bg-card text-card-foreground shadow-sm shadow-card hover:shadow-elegant transition-shadow duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-users w-12 h-12 text-primary mb-4"
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
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Group Study
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 mb-4">
                Collaborative learning environment with peer support and guidance.
              </p>
              <a href="/group-study">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full transition-colors">
                  View Details
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
