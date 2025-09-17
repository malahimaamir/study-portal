const Admissions = () => {
  return (
    <>
      <section id="entry" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple and transparent admission process to help you start your
              educational journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/applications">
              <div className="rounded-lg border bg-white text-gray-800 shadow-sm text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Application
                  </h3>
                  <p className="text-sm text-gray-600">
                    Submit your application online or in person
                  </p>
                </div>
              </div>
            </a>

            <a href="/review">
              <div className="rounded-lg border bg-white text-gray-800 shadow-sm text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Review</h3>
                  <p className="text-sm text-gray-600">
                    Application review and document verification
                  </p>
                </div>
              </div>
            </a>

            <a href="/interview">
              <div className="rounded-lg border bg-white text-gray-800 shadow-sm text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Interview
                  </h3>
                  <p className="text-sm text-gray-600">
                    Personal interview with admission committee
                  </p>
                </div>
              </div>
            </a>

            <a href="/enrollment">
              <div className="rounded-lg border bg-white text-gray-800 shadow-sm text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Enrollment
                  </h3>
                  <p className="text-sm text-gray-600">
                    Complete enrollment and begin your journey
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Admissions;
