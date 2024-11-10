
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-black via-[#26042e] to-black  text-white px-8 py-16">

      <Link href="/" passHref>
        <button className="absolute top-4 left-4 px-8 py-4 sm:mt-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 hover:bg-slate-800 text-white mt-3  rounded-full  transition duration-300 font-semibold sm:mb-20 sm:px-10 sm:py-13">
          Back to HomePage
        </button>
      </Link>
      <div className="md:w-1/2 flex flex-col justify-center items-start space-y-6 mt-12">
        <h1 className="text-4xl lg:text-6xl font-bold">Lets Connect with Me</h1>
        <p className="text-lg text-gray-300">
          Im always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out if
          you want to connect and collaborate.
        </p>

   
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-2xl text-teal-400" />
            <p className="text-lg text-gray-200">mehdiaff9876@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-2xl text-blue-500" />
            <a
              href="https://www.linkedin.com/in/mehdia-fatima-884506289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-blue-300 transition duration-300"
            >
              Connect with me on LinkedIn
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FaGithub className="text-2xl text-gray-500" />
            <a
              href="https://github.com/mehdiafatima"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-gray-400 transition duration-300"
            >
              Lets collaborate on GitHub
            </a>
          </div>
        </div>
      </div>

    
      <div className="md:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0 md:px-10">
        <form className="bg-white text-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-900">
            Contact Me
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-900 text-white font-semibold py-2 rounded hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;