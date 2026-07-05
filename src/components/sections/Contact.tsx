'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaInstagram,
  FaCopy
} from 'react-icons/fa';

const contactItems = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'dhiekson3@gmail.com',
    action: (text: string) => {
      navigator.clipboard.writeText(text);
      alert('Email copiado!');
    }
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: 'Entre em contato',
    link: 'https://wa.me/55'
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    value: '@Dhiekson',
    link: 'https://github.com/Dhiekson'
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    value: 'Dhiekson Nunes',
    link: 'https://www.linkedin.com/in/dhiekson-nunes'
  },
  {
    icon: FaInstagram,
    title: 'Instagram',
    value: '@dhiekson',
    link: 'https://www.instagram.com/dhieksonnunes/'
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="text-center h-full border-0 bg-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.value}</p>
                    {item.action ? (
                      <Button
                        variant="outline"
                        onClick={() => item.action(item.value)}
                        className="gap-2"
                      >
                        <FaCopy size={16} />
                        Copiar
                      </Button>
                    ) : (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <Button className="gap-2">
                          <Icon size={16} />
                          Acessar
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
