const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 to-green-100">
      <div className="bg-white shadow-2xl rounded-lg p-10 max-w-lg w-full">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
          FoodBite
        </h1>
        <p className="text-center text-lg text-gray-600 mb-6">
          Developed by <strong>Madhusudan Tiwari</strong>.
        </p>

        {/* Contact Links */}
        <div className="space-y-6">
          {/* Portfolio Link */}
          <a
            href="https://madhusudantiwari.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center space-x-4 bg-green-100 hover:bg-green-200 transition p-4 rounded-md"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
              alt="Portfolio"
              className="w-8 h-8"
            />
            <span className="font-semibold text-green-700">My Portfolio</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/madhusudantiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center space-x-4 bg-blue-100 hover:bg-blue-200 transition p-4 rounded-md"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
            <span className="font-semibold text-blue-700">
              LinkedIn Profile
            </span>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/madhusudantiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 transition p-4 rounded-md"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-8 h-8"
            />
            <span className="font-semibold text-gray-800">GitHub Profile</span>
          </a>
          {/* Email Button */}
          <button
            onClick={() =>
              (window.location.href = "mailto:madhusudantiwari@example.com")
            }
            className="w-full flex items-center space-x-4 bg-yellow-100 hover:bg-yellow-200 transition p-4 rounded-md"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
              className="w-8 h-8"
            />
            <span className="font-semibold text-gray-800">Email Me</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <h3 className="text-gray-600 text-lg">
            Let’s connect and build something amazing!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
