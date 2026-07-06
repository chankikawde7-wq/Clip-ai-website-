import { Link } from "react-router-dom";
import { Video, Twitter, Instagram, Youtube, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-600 rounded-lg">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Clip AI Pro
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Create Amazing Videos, Images, Avatars and Content with the power of artificial intelligence. Your all-in-one creative studio.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">All Features</Link>
              </li>
              <li>
                <Link to="/download" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Download App</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy#cookies" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Stay Updated</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest AI features and updates.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                required
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Clip AI Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm">
            <Mail className="w-4 h-4" />
            <a href="mailto:support@clipaipro.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              support@clipaipro.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
