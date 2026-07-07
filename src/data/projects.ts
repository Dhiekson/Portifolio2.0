export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  objective: string;
  problem: string;
  solution: string;
  architecture?: string;
  technologies: string[];
  tools?: string[];
  database?: string[];
  auth?: string[];
  apis?: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  future?: string[];
  status: 'Concluído' | 'Em desenvolvimento' | 'Planejamento';
  year: number;
  category: string;
  image?: string;
  links: {
    github: string;
    apk?: string;
    deploy?: string;
  };
  screenshots?: string[];
}

export const projects: Project[] = [
  {
  id: 'planejaplus',
  name: 'PlanejaPlus',
  description: 'Aplicativo completo para gerenciamento financeiro pessoal.',

  fullDescription:
    'PlanejaPlus é um aplicativo mobile desenvolvido para auxiliar usuários no controle das finanças pessoais. O sistema permite registrar receitas e despesas, acompanhar o saldo em tempo real, visualizar gráficos e relatórios, receber notificações automáticas de vencimento e organizar toda a vida financeira por categorias através de uma interface moderna e intuitiva.',

  objective:
    'Facilitar o controle financeiro pessoal por meio de uma plataforma prática, segura e acessível.',

  problem:
    'Muitas pessoas têm dificuldade em acompanhar gastos, controlar vencimentos e entender sua situação financeira devido à falta de ferramentas simples e organizadas.',

  solution:
    'Desenvolvimento de um aplicativo mobile com sincronização em nuvem, dashboard interativo, notificações inteligentes e recursos que permitem visualizar receitas, despesas e saldo de forma rápida.',

  features: [
    'Cadastro e login seguro',
    'Autenticação com Supabase',
    'Controle de receitas',
    'Controle de despesas',
    'Categorias personalizadas',
    'Dashboard financeiro',
    'Gráficos interativos',
    'Saldo atualizado automaticamente',
    'Histórico financeiro',
    'Pesquisa e filtros',
    'Notificações de vencimento',
    'Notificações push',
    'Perfil do usuário',
    'Sincronização em nuvem',
    'Interface responsiva'
  ],

  technologies: [
    'React Native',
    'Expo',
    'TypeScript',
    'Supabase',
    'PostgreSQL'
  ],

  tools: [
    'Expo Go',
    'Figma',
    'Postman',
    'VS Code',
    'Git',
    'GitHub'
  ],

  database: [
    'PostgreSQL (Supabase)'
  ],

  auth: [
    'Supabase Auth',
    'Email/Password',
    'JWT'
  ],

  challenges: [
    'Implementação de notificações automáticas de vencimento',
    'Sincronização de dados em tempo real',
    'Organização do banco de dados relacional',
    'Gerenciamento eficiente de estado',
    'Construção de gráficos financeiros dinâmicos',
    'Deploy de funções serverless no Supabase'
  ],

  learnings: [
    'Arquitetura de aplicações React Native',
    'Integração completa com Supabase',
    'Autenticação segura utilizando JWT',
    'Modelagem de banco de dados PostgreSQL',
    'Consumo de APIs REST',
    'Gerenciamento de estado com Context API',
    'Implementação de notificações push',
    'Boas práticas de UX/UI para aplicativos mobile'
  ],

  status: 'Concluído',

  year: 2026,

  category: 'Mobile',

  image: '/images/planejaplus.png',

  links: {
    github: 'https://github.com/Dhiekson',
    apk: '#',
  },
},
];