'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Estudante de Análise e Desenvolvimento de Sistemas',
    period: '2022 - Presente',
    description: 'Formação em desenvolvimento de sistemas, aprendizado de várias tecnologias e conceitos de programação.',
  },
  {
  title: 'Desenvolvimento Mobile',
  period: '2023 - Presente',
  description: 'Desenvolvimento de aplicativos Android e iOS utilizando React Native, Expo e TypeScript, com integração ao Supabase, Firebase e APIs REST.',
},
{
  title: 'Desenvolvimento Web',
  period: '2023 - Presente',
  description: 'Desenvolvimento de aplicações web full stack utilizando Next.js, React, TypeScript e Supabase, criando interfaces modernas, responsivas e de alta performance.',
},
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experiência</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-gradient mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
