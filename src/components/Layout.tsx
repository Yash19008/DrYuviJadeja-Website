import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "IVF Quiz", href: "/ivf-quiz" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Top bar */}
            <div className="bg-primary text-primary-foreground text-sm py-2">
                <div className="container flex justify-between items-center">
                    <span className="hidden sm:inline">📍 Vadodara · Ahmedabad · Mumbai · Anand</span>
                    <a href="tel:+919876543210" className="flex items-center gap-1.5 ml-auto font-medium">
                        <Phone className="w-3.5 h-3.5" />
                        +91 98765 43210
                    </a>
                </div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
                <div className="container flex items-center justify-between h-16 lg:h-18">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-display font-bold text-primary">Dr. Yuvi</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.href
                                        ? "text-primary bg-secondary"
                                        : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-3">
                        <Button asChild>
                            <Link to="/contact">Book Consultation</Link>
                        </Button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="lg:hidden p-2 text-foreground"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile nav */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="lg:hidden overflow-hidden bg-card border-t"
                        >
                            <nav className="container py-4 flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${location.pathname === link.href
                                                ? "text-primary bg-secondary"
                                                : "text-muted-foreground hover:text-primary"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button asChild className="mt-2">
                                    <Link to="/contact" onClick={() => setMobileOpen(false)}>Book Consultation</Link>
                                </Button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="bg-primary text-primary-foreground">
                <div className="container section-padding">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div>
                            <h3 className="text-xl font-display font-bold mb-4">Dr. Yuvi</h3>
                            <p className="text-primary-foreground/80 text-sm leading-relaxed">
                                Gynaecologist & IVF Specialist with 10+ years of experience helping families grow. TEDx Speaker.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-primary-foreground/80">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link to={link.href} className="hover:text-primary-foreground transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-sm text-primary-foreground/80">
                                <li>IVF Treatment</li>
                                <li>ICSI</li>
                                <li>IUI</li>
                                <li>Egg Freezing</li>
                                <li>Pregnancy Care</li>
                                <li>Laparoscopic Surgery</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-sm text-primary-foreground/80">
                                <li>📍 Vadodara, Gujarat, India</li>
                                <li>📞 +91 98765 43210</li>
                                <li>✉️ info@doctoryuvi.com</li>
                            </ul>
                            <div className="flex gap-3 mt-4">
                                <a href="https://instagram.com/doctoryuvi" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/60 transition-colors">Instagram</a>
                                <a href="https://facebook.com/doctoryuvi" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/60 transition-colors">Facebook</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
                        © 2026 Dr. Yuvrajsingh Jadeja. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
