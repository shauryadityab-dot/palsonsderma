import { useState } from "react";
import { Menu, X, Search, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Brands", href: "#brands" },
    { label: "New Launches", href: "#new-launches" },
  ];

  const megaMenu = {
    categories: [
      { title: "Cleansers", href: "/products/cleansers" },
      { title: "Moisturizers", href: "/products/moisturizers" },
      { title: "Serums", href: "/products/serums" },
      { title: "Sunscreens", href: "/products/sunscreens" },
      { title: "Masks", href: "/products/masks" },
    ],
    skinTypes: ["Dry", "Oily", "Combination", "Sensitive", "Normal"],
    concerns: ["Acne", "Aging", "Hyperpigmentation", "Dryness", "Sensitivity"],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PD</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Palsons Derma</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-0">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-6 w-full md:w-[700px] grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Categories</h4>
                        <ul className="space-y-2">
                          {megaMenu.categories.map((item) => (
                            <li key={item.title}>
                              <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground px-2">
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">By Skin Type</h4>
                        <ul className="space-y-2">
                          {megaMenu.skinTypes.map((type) => (
                            <li key={type}>
                              <a href={`#skin-type-${type.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground">
                                {type}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Skin Concerns</h4>
                        <ul className="space-y-2">
                          {megaMenu.concerns.map((c) => (
                            <li key={c}>
                              <a href={`#concern-${c.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-muted-foreground hover:text-foreground">
                                {c}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks.filter((l) => l.label !== "Products").map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav> 

          {/* Search & Profile (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="hidden sm:block w-56 pl-3 pr-10 py-2 border border-border rounded-md text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </div>
            <button
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground"
              aria-label="Profile"
            >
              <User size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.label === "Products") {
                  return (
                    <div key="products" className="flex flex-col">
                      <button
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-2 flex items-center justify-between"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      >
                        Products
                        <ChevronDown className={`ml-2 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                      </button>

                      {mobileProductsOpen && (
                        <div className="pl-4 mt-2 space-y-3">
                          <div>
                            <div className="text-xs font-semibold mb-1">Categories</div>
                            <div className="flex flex-col gap-2">
                              {megaMenu.categories.map((item) => (
                                <a key={item.title} href={item.href} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                                  {item.title}
                                </a>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-semibold mb-1">By Skin Type</div>
                            <div className="flex flex-col gap-2">
                              {megaMenu.skinTypes.map((t) => (
                                <a key={t} href={`#skin-type-${t.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                                  {t}
                                </a>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-semibold mb-1">Skin Concerns</div>
                            <div className="flex flex-col gap-2">
                              {megaMenu.concerns.map((c) => (
                                <a key={c} href={`#concern-${c.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                                  {c}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="flex items-center gap-3 mt-2">
                <button
                  className="flex-1 px-3 py-2 border rounded-md text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Search size={16} /> Search
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground"
                  aria-label="Profile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
