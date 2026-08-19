import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{SITE.name}</h3>
            <p className="text-gray-600 text-sm">
              Software Engineer focused on building backend services, APIs, and business platforms.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              {/* <a
                href={`https://twitter.com/${SITE.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110"
                aria-label="Twitter"
              >
                <FiTwitter className="h-6 w-6" />
              </a> */}
              <a
                href={`mailto:${SITE.email}`}
                className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110"
                aria-label="Email"
              >
                <FiMail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center">
            Built with <FiHeart className="text-red-500 mx-1" /> using Next.js, Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;