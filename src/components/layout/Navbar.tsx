'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Projetos', href: '/projetos' },
  { name: 'Tecnologias', href: '/tecnologias' },
  { name: 'Experiência', href: '/experiencia' },
  { name: 'Contato', href: '/contato' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            DQ
          </div>
          <div className="hidden md:flex items-center gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-16 h-6 bg-muted/30 rounded-md animate-pulse" />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-muted/30 rounded-md animate-pulse" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass py-3 shadow-xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="group relative block">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                DQ
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative block px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActiveLink(link.href)
                      ? 'text-blue-400'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                  {isActiveLink(link.href) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Social Links (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/Dhiekson"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-all duration-300 hover:text-primary"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhiekson-nunes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-all duration-300 hover:text-primary"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:dhiekson3@gmail.com"
                className="p-2 rounded-lg hover:bg-secondary transition-all duration-300 hover:text-primary"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-secondary transition-all duration-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, height: 'auto', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, height: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden glass border-t"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 text-left text-lg font-medium transition-all duration-300 ${
                        isActiveLink(link.href)
                          ? 'text-blue-400'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span className={`h-2 w-2 rounded-full ${
                        isActiveLink(link.href) ? 'bg-blue-400' : 'bg-transparent'
                      }`} />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="h-px bg-border my-4" />
                
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/Dhiekson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dhiekson-nunes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:dhiekson3@gmail.com"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary transition-all duration-300"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}