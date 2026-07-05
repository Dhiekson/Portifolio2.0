'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiPhp,
  SiNodedotjs, 
  SiSupabase, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb,
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiGraphql
} from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';

const technologies = [
  { name: 'React Native', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'PHP', icon: SiPhp },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Docker', icon: SiDocker },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'OpenAI', icon: FaBrain },
];

export default function Tech() {
  return (
    <section id="tech" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Tecnologias</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -8 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-3">
                  <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}