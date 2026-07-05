'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye, Github, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';

const statusColors = {
  'Concluído': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Em desenvolvimento': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Planejamento': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
            >
              <Card className="h-full border-0 overflow-hidden bg-card/50 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 flex items-center justify-center relative overflow-hidden">
                  {project.image || project.screenshots?.[0] ? (
                    <img
                      src={project.image || project.screenshots?.[0]}
                      alt={`${project.name} screenshot`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                      💻
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <span className={`text-xs px-3 py-1 rounded-full border ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Link href={`/projetos/${project.id}`}>
                      <Button className="flex-1 gap-2 group/btn">
                        Ver Projeto
                        <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary transition-all duration-300"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}