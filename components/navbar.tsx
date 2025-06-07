"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download, X, Play } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Logo from "@/public/logo(black).png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { name: "Stocks", href: "/products/stocks", description: "Trade in NSE & BSE" },
    { name: "Mutual Funds", href: "/products/mutual-funds", description: "3000+ funds available" },
    { name: "IPOs", href: "/products/ipos", description: "Apply for upcoming IPOs" },
    { name: "Insurance", href: "/products/insurance", description: "Term, Health & Life" },
    { name: "Fixed Deposits", href: "/products/fixed-deposits", description: "High-yield FDs" },
    { name: "Gold & ETFs", href: "/products/gold-etfs", description: "Digital gold & ETFs" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-lg"
          : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="rounded-lg flex items-center justify-center"
              >
                <Image src={Logo} alt="Logo" width={150} height={200} />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-blue-50 transition-colors">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div
                    className="grid w-[600px] grid-cols-2 gap-3 p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {products.map((product, index) => (
                      <NavigationMenuLink key={product.name} asChild>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <Link
                            href={product.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {product.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {product.description}
                            </p>
                          </Link>
                        </motion.div>
                      </NavigationMenuLink>
                    ))}
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {["About", "Learn", "Contact"].map((item) => (
                <NavigationMenuItem key={item}>
                  <Link href={`/${item.toLowerCase()}`} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {item}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Sign In */}
            <Link
              href="https://devharfundsmart.investwell.app/"
              className="hidden lg:inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Sign In
            </Link>

            {/* Download App */}
            <motion.div whileHover={{ backgroundColor: "#f0f0f0", color: "#000" }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const isAndroid = /Android/i.test(navigator.userAgent);
                  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.iw.mint.app&pcampaignid=web_share";
                  const appStoreUrl = "https://apps.apple.com/in/app/mint-by-investwell/id1479042500";
                  setTimeout(() => {
                    if (isAndroid) {
                      window.location.href = playStoreUrl;
                    } else if (isIOS) {
                      window.location.href = appStoreUrl;
                    }
                  }, 2000);
                }}
              >
                <Play className="mr-2 h-4 w-4 text-white" />
                <span className="hidden sm:inline text-white">Download App</span>
                <span className="sm:hidden text-white">App</span>
              </Button>
            </motion.div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className="h-5 w-5" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu className="h-5 w-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <motion.nav
                  className="flex flex-col space-y-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href="/" className="flex items-center space-x-2 pb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">devhar</span>
                  </Link>

                  <div className="space-y-3">
                    <div className="font-semibold text-gray-900">Products</div>
                    {products.map((product, index) => (
                      <motion.div
                        key={product.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={product.href}
                          className="block pl-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {product.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {["About", "Learn", "Contact"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: (index + products.length) * 0.1,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="py-2 text-gray-600 hover:text-gray-900 transition-colors block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    className="pt-4 space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <Link
                      href="https://devharfundsmart.investwell.app/"
                      className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition duration-200"
                    >
                      Sign In
                    </Link>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download App
                    </Button>
                  </motion.div>
                </motion.nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
