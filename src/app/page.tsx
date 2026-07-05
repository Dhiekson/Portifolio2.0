'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code2, FolderKanban, Mail, Sparkles } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Lenis from '@studio-freight/lenis';

const quickLinks = [
  {
    title: 'Sobre',
    description: 'Conheça a minha trajetória, valores e visão profissional.',
    href: '/sobre',
    icon: Sparkles,
  },
  {
    title: 'Projetos',
    description: 'Veja os projetos que desenvolvi com foco em impacto e qualidade.',
    href: '/projetos',
    icon: FolderKanban,
  },
  {
    title: 'Tecnologias',
    description: 'Explore as tecnologias e ferramentas com as quais trabalho.',
    href: '/tecnologias',
    icon: Code2,
  },
  {
    title: 'Experiência',
    description: 'Acompanhe minha evolução profissional e formação.',
    href: '/experiencia',
    icon: Briefcase,
  },
  {
    title: 'Contato',
    description: 'Entre em contato para trocar ideias ou discutir projetos.',
    href: '/contato',
    icon: Mail,
  },
];

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  <Link
                    href={link.href}
                    className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{link.title}</h3>
                    <p className="mb-6 flex-1 text-sm text-muted-foreground">{link.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                      Acessar página
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}