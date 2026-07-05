'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronLeft, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/data/projects';

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const router = useRouter();

  const statusColors: Record<string, string> = {
    'Concluído': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Em desenvolvimento': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Planejamento': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Button variant="ghost" onClick={() => router.back()} className="gap-2">
            <ChevronLeft size={20} />
            Voltar
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{project.name}</h1>
            <span className={`text-sm px-4 py-2 rounded-full border ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">{project.fullDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="aspect-video bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center overflow-hidden">
            {project.image || project.screenshots?.[0] ? (
              <img
                src={project.image || project.screenshots?.[0]}
                alt={`${project.name} screenshot`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-8xl opacity-50">💻</span>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Objetivo</h2>
              <p className="text-muted-foreground">{project.objective}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="text-2xl font-bold mb-4">Problema</h2>
              <p className="text-muted-foreground">{project.problem}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Solução</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <h2 className="text-2xl font-bold mb-4">Funcionalidades</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Desafios</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <h2 className="text-2xl font-bold mb-4">Aprendizados</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.learnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </motion.div>

            {project.future && project.future.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-4">Melhorias Futuras</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.future.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-card/50 p-6 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold mb-4">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-2 bg-secondary rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.tools && project.tools.length > 0 && (
              <div className="bg-card/50 p-6 rounded-2xl border border-border/50">
                <h3 className="text-xl font-bold mb-4">Ferramentas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-3 py-2 bg-secondary rounded-lg text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.database && project.database.length > 0 && (
              <div className="bg-card/50 p-6 rounded-2xl border border-border/50">
                <h3 className="text-xl font-bold mb-4">Banco de Dados</h3>
                <div className="flex flex-wrap gap-2">
                  {project.database.map((db) => (
                    <span key={db} className="px-3 py-2 bg-secondary rounded-lg text-sm">
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-card/50 p-6 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <div className="flex flex-col gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary hover:bg-primary transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.links.apk && (
                  <a
                    href={project.links.apk}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary hover:bg-primary transition-all duration-300"
                  >
                    <Download size={20} />
                    <span>Download APK</span>
                  </a>
                )}
                {project.links.deploy && (
                  <a
                    href={project.links.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary hover:bg-primary transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Ver Deploy</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
