import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Video, Moon, Sun, Download, User, LogOut } from "lucide-react";
import { cn } from "../lib/utils";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Download", path: "/download" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-indigo-600 rounded-xl group-hover:bg-indigo-500 transition-colors">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                Clip AI Pro
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400",
                    location.pathname === link.path
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 dark:text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 mr-2">
                <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">EN</button>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">HI</button>
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {currentUser ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium">
                    <User className="w-4 h-4 text-indigo-500" />
                    <span>{currentUser.displayName || currentUser.email}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 transition-colors hidden sm:flex items-center gap-1"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Log out</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden sm:block"
                >
                  Log in
                </Link>
              )}

              <Link
                to="/download"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-indigo-500/25"
              >
                <Download className="w-4 h-4" />
                <span>Get App</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {currentUser ? (
              <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-800 mt-2">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium mb-4">
                  <User className="w-4 h-4 text-indigo-500" />
                  <span>{currentUser.displayName || currentUser.email}</span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 text-red-500 font-medium transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log out</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                  location.pathname === "/login"
                    ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                )}
              >
                Log in
              </Link>
            )}

            <Link
              to="/download"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3.5 rounded-xl font-medium transition-colors mx-4 mt-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Now</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
