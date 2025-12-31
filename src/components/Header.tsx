import { useState } from "react";
import { Menu, X, Search, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    { label: "New Launches", href: "#new-launches" },
  ];

  const megaMenu = {
    categories: [
      { title: "Cleansers", href: "/category/cleansers" },
      { title: "Moisturizers", href: "/category/moisturizers" },
      { title: "Serums", href: "/category/serums" },
      { title: "Sunscreens", href: "/category/sunscreens" },
      { title: "Masks", href: "/category/masks" },
    ],
    brands: [
      { title: "NeolayrPro", slug: "neolayrpro" },
      { title: "Isdin", slug: "isdin" },
      { title: "Nmfe", slug: "nmfe" },
      { title: "Renewderm", slug: "renewderm" },
      { title: "Q-Sera", slug: "q-sera" },
    ],
    skinTypes: [
      { title: "Dry", slug: "dry" },
      { title: "Oily", slug: "oily" },
      { title: "Combination", slug: "combination" },
      { title: "Sensitive", slug: "sensitive" },
      { title: "Normal", slug: "normal" },
    ],
    concerns: [
      { title: "Acne", slug: "acne" },
      { title: "Aging", slug: "aging" },
      { title: "Hyperpigmentation", slug: "hyperpigmentation" },
      { title: "Dryness", slug: "dryness" },
      { title: "Sensitivity", slug: "sensitivity" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                PD
              </span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              Palsons Derma
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
                {/* Products */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-2">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-6 w-full md:w-[700px] grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Categories
                        </h4>
                        <ul className="space-y-2">
                          {megaMenu.categories.map((item) => (
                            <li key={item.title}>
                              <Link
                                to={item.href}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          By Skin Type
                        </h4>
                        <ul className="space-y-2">
                          {megaMenu.skinTypes.map((type) => (
                            <li key={type.slug}>
                              <Link
                                to={`/category/skin-type-${type.slug}`}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                {type.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Skin Concerns
                        </h4>
                        <ul className="space-y-2">
                          {megaMenu.concerns.map((c) => (
                            <li key={c.slug}>
                              <Link
                                to={`/category/concern-${c.slug}`}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                {c.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Brands */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-2">
                    Brands
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-6 w-[400px]">
                      <h4 className="text-sm font-semibold mb-3">
                        Shop by Brand
                      </h4>
                      <ul className="space-y-2">
                        {megaMenu.brands.map((brand) => (
                          <li key={brand.slug}>
                            <Link
                              to={`/brand/${brand.slug}`}
                              className="text-sm text-muted-foreground hover:text-foreground block py-1"
                            >
                              {brand.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Other links */}
            {navLinks
              .filter((l) => l.label !== "Products")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
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
                        onClick={() =>
                          setMobileProductsOpen(!mobileProductsOpen)
                        }
                      >
                        Products
                        <ChevronDown
                          className={`ml-2 transition-transform ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileProductsOpen && (
                        <div className="pl-4 mt-2 space-y-3">
                          <div>
                            <div className="text-xs font-semibold mb-1">
                              Categories
                            </div>
                            <div className="flex flex-col gap-2">
                              {megaMenu.categories.map((item) => (
                                <Link
                                  key={item.title}
                                  to={item.href}
                                  className="text-sm text-muted-foreground hover:text-foreground"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-semibold mb-1">
                              By Skin Type
                            </div>
                            <div className="flex flex-col gap-2">
                              {megaMenu.skinTypes.map((t) => (
                                <Link
                                  key={t.slug}
                                  to={`/category/skin-type-${t.slug}`}
                                  className="text-sm text-muted-foreground hover:text-foreground"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {t.title}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-semibold mb-1">
                              Skin Concerns
                            </div>
                            <div className="flex flex-col gap-2">
                              {megaMenu.concerns.map((c) => (
                                <Link
                                  key={c.slug}
                                  to={`/category/concern-${c.slug}`}
                                  className="text-sm text-muted-foreground hover:text-foreground"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {c.title}
                                </Link>
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
