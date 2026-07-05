import { notFound } from 'next/navigation';
import ProjectDetails from '@/components/projects/ProjectDetails';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
