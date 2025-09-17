export default function PrincipalMessage() {
  return (
    <section id="principal" className="py-20 bg-principal-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-principal-green">
            Principal&apos;s Message
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leadership and vision driving educational excellence at
            F.G.P.H.S.T.C.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border bg-white shadow-md border-principal-green/20">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-principal-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-user-check w-16 h-16 text-principal-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-principal-green mb-2">
                  Dr. Academic Leader
                </h3>
                <p className="text-gray-600">Principal, F.G.P.H.S.T.C</p>
              </div>

              <blockquote className="text-lg text-gray-700 italic text-center leading-relaxed">
                &quot;Welcome to F.G.P.H.S.T.C, where we believe in nurturing
                minds and shaping futures. Our commitment to academic
                excellence, innovative teaching methods, and holistic
                development ensures that every student reaches their full
                potential. Together, we build not just successful careers, but
                responsible citizens who contribute meaningfully to
                society.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
