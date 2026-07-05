import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dhiekson Nunes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
