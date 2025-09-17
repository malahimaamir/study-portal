export default function PaymentOptions() {
  return (
    <section id="paymentmode" className="py-20 bg-payment-red/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-payment-red">
            Payment Options
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible and secure payment methods to make your education
            accessible and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg border bg-white shadow-md text-center transition-shadow duration-300 hover:shadow-lg border-payment-red/20">
            <div className="p-6">
              <div className="w-16 h-16 bg-payment-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-credit-card w-8 h-8 text-payment-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <h3 className="font-semibold text-payment-red mb-2">
                Online Payment
              </h3>
              <p className="text-sm text-gray-600">
                Secure online transactions
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-white shadow-md text-center transition-shadow duration-300 hover:shadow-lg border-payment-red/20">
            <div className="p-6">
              <div className="w-16 h-16 bg-payment-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-book-open w-8 h-8 text-payment-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-payment-red mb-2">
                Installments
              </h3>
              <p className="text-sm text-gray-600">Flexible payment plans</p>
            </div>
          </div>

          <div className="rounded-lg border bg-white shadow-md text-center transition-shadow duration-300 hover:shadow-lg border-payment-red/20">
            <div className="p-6">
              <div className="w-16 h-16 bg-payment-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-users w-8 h-8 text-payment-red"
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
              <h3 className="font-semibold text-payment-red mb-2">
                Bank Transfer
              </h3>
              <p className="text-sm text-gray-600">Direct bank transfers</p>
            </div>
          </div>

          <div className="rounded-lg border bg-white shadow-md text-center transition-shadow duration-300 hover:shadow-lg border-payment-red/20">
            <div className="p-6">
              <div className="w-16 h-16 bg-payment-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-phone w-8 h-8 text-payment-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="font-semibold text-payment-red mb-2">
                Phone Payment
              </h3>
              <p className="text-sm text-gray-600">Payment via phone support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
