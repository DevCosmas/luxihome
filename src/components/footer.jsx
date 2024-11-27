import Logo from './logo';
import { TiSocialLinkedin } from 'react-icons/ti';
import { SlSocialPintarest, SlSocialInstagram } from 'react-icons/sl';
import { TiSocialFacebook } from 'react-icons/ti';

export default function Footer() {
  return (
    <footer className="bg-green-800 py-12 sm:px-16 px-6 text-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Logo and Follow Us */}
        <div className="flex flex-col gap-6">
          <Logo color="white" />
          <div>
            <h1 className="font-bold mb-4">Follow Us</h1>
            <ul className="flex gap-4 items-center text-2xl">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-gray-300">
                  <TiSocialLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white hover:text-gray-300">
                  <SlSocialPintarest />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white hover:text-gray-300">
                  <SlSocialInstagram />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white hover:text-gray-300">
                  <TiSocialFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Section */}
        <DownloadSection />

        {/* Footer Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterCard
            title="Quick Links"
            list={['listing', 'category', 'rent', 'sale', 'developer']}
          />
          <FooterCard
            title="Company"
            list={['About Us', 'Careers', 'Press', 'Blog']}
          />
          <FooterCard
            title="Resources"
            list={[
              'Documentation',
              'API Reference',
              'Community Forum',
              'Guides',
            ]}
          />
          <FooterCard
            title="Support"
            list={['Contact Us', 'FAQs', 'Live Chat', 'Help Center']}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Luxihome. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCard({ title, list }) {
  return (
    <div>
      <h1 className="font-bold font-sans mb-4">{title}</h1>
      <ul className="flex flex-col gap-2">
        {list.map((li, i) => (
          <li key={i}>
            <a
              href="/"
              className="text-white capitalize hover:text-gray-300">
              {li}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DownloadSection() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-lg">Get Our App</h1>
      <p className="text-sm">Download our app for the best experience.</p>
      <div className="flex gap-4">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play Store"
            className="w-36"
          />
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Apple App Store"
            className="w-36"
          />
        </a>
      </div>
    </div>
  );
}
