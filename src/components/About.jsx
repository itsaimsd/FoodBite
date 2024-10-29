import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-container p-8 min-h-screen bg-gradient-to-r from-white to-green-50">
        {/* Overview Section */}
        <section className="mb-12 animate-fade-in-up delay-200">
          <h2 className="text-4xl font-extrabold mb-6 text-green-700 transition-transform duration-500 transform hover:scale-105">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This platform is a product of the{" "}
            <strong>Namaste React Webseries</strong>. We’ve developed a wide
            range of features designed to enhance the user experience:
          </p>
          <ul className="list-disc ml-6 space-y-3 text-lg text-gray-800 animate-slide-in-left delay-300">
            <li>User authentication implemented using React Context API.</li>
            <li>
              A robust cart system for adding, removing, and managing item
              quantities.
            </li>
            <li>
              Fully responsive design, optimized with Tailwind CSS for seamless
              cross-device usability.
            </li>
            <li>
              Dynamic restaurant data integration through API connectivity.
            </li>
            <li>
              State management with Redux Toolkit for efficient operations.
            </li>
            <li>
              Interactive features like search functionality and dropdowns.
            </li>
            <li>
              Clean, modular architecture with reusable components to ensure
              maintainability.
            </li>
          </ul>
        </section>

        {/* Technologies Used Section */}
        <section className="mb-12 animate-fade-in-up delay-400">
          <h2 className="text-4xl font-extrabold mb-6 text-green-700 transition-transform duration-500 transform hover:scale-105">
            Technologies Used
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our platform leverages modern web technologies to deliver a smooth,
            high-performance experience:
          </p>
          <ul className="list-disc ml-6 space-y-3 text-lg text-gray-800 animate-slide-in-left delay-500">
            <li>
              <strong>ReactJS:</strong> For building dynamic, interactive user
              interfaces.
            </li>
            <li>
              <strong>Redux Toolkit:</strong> To manage global state
              efficiently, particularly for cart operations.
            </li>
            <li>
              <strong>React Context API:</strong> For handling user
              authentication and managing context across components.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> For crafting responsive layouts and
              a modern UI.
            </li>
            <li>
              <strong>JavaScript (ES6+):</strong> To implement logic with
              improved readability and performance.
            </li>
            <li>
              <strong>Vite:</strong> For fast development and build processes.
            </li>
            <li>
              <strong>APIs:</strong> To fetch real-time restaurant information.
            </li>
          </ul>
        </section>

        {/* Future Plans Section */}
        <section className="mb-12 animate-fade-in-up delay-600">
          <h2 className="text-4xl font-extrabold mb-6 text-green-700 transition-transform duration-500 transform hover:scale-105">
            What’s Next?
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We’re committed to continuously enhancing the platform. Here’s a
            glimpse of what’s coming:
          </p>
          <ul className="list-disc ml-6 space-y-3 text-lg text-gray-800 animate-slide-in-left delay-700">
            <li>Real-time chat functionality for better user interaction.</li>
            <li>
              AI-powered recommendations to personalize the user experience.
            </li>
            <li>Payment gateway integration for secure transactions.</li>
            <li>Performance optimizations to boost speed and efficiency.</li>
          </ul>
        </section>

        <footer className="text-center animate-fade-in-up delay-800">
          <h3 className="text-2xl text-gray-500 font-medium">
            Stay tuned for exciting updates as we continue our journey!
          </h3>
        </footer>
      </div>
    );
  }
}

export default About;
