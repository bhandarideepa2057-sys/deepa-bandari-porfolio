import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Chemistry", link: "#chemistry-portfolio" },
    { name: "About", link: "#about" },
    // { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-gradient-to-br from-pink-100 to-rose-50",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    textHover: "text-pink-500",
    textActive: "text-pink-600",
    indicator: "from-pink-500 to-fuchsia-500",
    button: "from-pink-500 to-fuchsia-500",
  };

  const darkColors = {
    navBg: "bg-gradient-to-br from-slate-900 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-pink-300",
    textActive: "text-pink-400",
    indicator: "from-pink-400 to-fuchsia-500",
    button: "from-pink-500 to-fuchsia-500",
  };

  const color = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed z-50 mt-4 flex w-full justify-center">
      <nav
        className={`flex items-center justify-center ${color.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex w-full items-center justify-between space-x-6 lg:space-x-8">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${color.textPrimary}`}>
              Portfolio
              {/* logo dot in pink */}
              <span className="text-pink-500">.</span>
            </span>
          </a>

          {/* Desktop nav items */}
          <div className="hidden items-center space-x-6 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a
                  href={item.link}
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className="relative"
                >
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      isActive
                        ? color.textActive
                        : `${color.textSecondary} hover:text-rose-300`
                    }`}
                  >
                    {item.name}
                  </span>
                  {isActive && (
                    <div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r rounded-full ${color.indicator}`}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-colors`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Desktop "Hire Me" button */}
            <a
              href="#contact"
              className={`hidden rounded-full bg-gradient-to-r ${color.button} px-6 py-2 font-semibold text-white shadow-md transition-shadow hover:shadow-lg lg:block`}
            >
              Hire Me
            </a>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-4 px-2 lg:hidden">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`rounded-lg p-2 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                {isMenuOpen ? (
                  <X
                    className={`h-5 w-5 ${
                      darkMode ? "text-white" : "text-gray-700"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`h-5 w-5 ${
                      darkMode ? "text-white" : "text-gray-700"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`absolute left-0 right-0 top-full mt-2 rounded-xl border shadow-lg backdrop-blur-lg lg:hidden ${
              darkMode ? "border-gray-700 bg-gray-900/95" : "border-gray-200 bg-white/95"
            }`}
          >
            <div className="space-y-2 px-4 py-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                    className="block"
                  >
                    <div
                      className={`rounded-lg py-3 px-4 text-center ${
                        isActive
                          ? darkMode
                            ? "bg-gray-800"
                            : "bg-pink-50"
                          : ""
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          isActive ? color.textActive : color.textSecondary
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-lg bg-gradient-to-r ${color.button} py-3 px-4 text-center font-semibold text-white shadow-md`}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
