export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ebf5ff] via-white to-[#daedff] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center space-y-8 py-12">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e98520] to-[#0c499c] tracking-tight">
            Pictures with Magic
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-[#e98520] to-[#0c499c] mx-auto rounded-full"></div>
        </div>

        {/* Tagline */}
        <div className="space-y-4 px-4">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light italic leading-relaxed">
            Do you have a photo?...Then you have a memory...
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light italic leading-relaxed">
            a whole world of stories to tell...
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-block">
          <div className="bg-gradient-to-r from-[#e98520] to-[#0c499c] text-white px-8 py-3 rounded-full shadow-lg">
            <p className="text-lg font-semibold">Website Under Construction</p>
          </div>
        </div>

        {/* Message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mx-auto max-w-2xl border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our website is being updated to serve you better.
            We&#39;re still here and ready to help you preserve your precious memories!
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 pt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Phone */}
            <a
              href="tel:+15617039789"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group w-full sm:w-auto justify-center"
            >
              <svg
                className="w-6 h-6 text-[#e98520] group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium">(561) 703-9789</span>
            </a>

            {/* Email */}
            <a
              href="mailto:mparrac@pictureswithmagic.com"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group w-full sm:w-auto justify-center"
            >
              <svg
                className="w-6 h-6 text-[#0c499c] group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">mparrac@pictureswithmagic.com</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pictures With Magic, LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
