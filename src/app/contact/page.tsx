import { generateMetadata } from '@/components/SEO';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { SITE } from '@/lib/constants';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const metadata = generateMetadata({
  title: 'Contact',
  description: 'Get in touch with me for collaboration, freelance projects, or API development discussions. Reach out via email or WhatsApp.',
});

export default function Contact() {
  return (
    <>
    <Navbar />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? Need a robust backend system or API? Let&apos;s talk.
        </p>
      </header>

      {/* Contact Section - Email & Phone First */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Primary Contact Methods */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reach Me Directly</h2>
          <div className="space-y-6">
            {/* Email - Primary CTA */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start">
                <FaEnvelope className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">Email (Primary)</p>
                  <a target="_blank" href={`mailto:${SITE.email}`} className="text-lg text-blue-600 hover:text-blue-700 font-semibold">
                    {SITE.email}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">I&apos;ll respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* WhatsApp / Phone - Secondary CTA */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-start">
                <FaWhatsapp className="h-6 w-6 text-green-600 mt-1" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">WhatsApp</p>
                  <a target="_blank" href={`https://wa.me/${SITE.phone.replace(/[^0-9]/g, '')}`} className="text-lg text-green-600 hover:text-green-700 font-semibold">
                    {SITE.phone}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">For quick questions or urgent inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Find me on social</h3>
            <div className="flex space-x-4">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              {/* <a
                href={`https://twitter.com/${SITE.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-400 transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
                <span>Twitter</span>
              </a> */}
            </div>
          </div>
        </section>

        {/* Contact Form - Optional, but keeps convenience */}
        {/* <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Or Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section> */}
      </div>
      
      {/* Call to Action */}
      <section className="text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-xl shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Let&apos;s Build Something Great!</h2>
        <p className="text-gray-600 mb-6">
          Have an API to build, a system to scale, or a platform to launch? I&apos;m ready to help.
        </p>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Email Me Directly
        </a>
      </section>
    </div>
    <Footer />
    </>
  );
}