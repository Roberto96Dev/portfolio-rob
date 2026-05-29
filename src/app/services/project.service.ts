import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'PigroBot',
      subtitle: 'AI Personal Assistant',
      description: 'Agente autonomo su WhatsApp che gestisce email, calendario e ricerche web tramite LLM.',
      stack: ['Node.js', 'Groq AI', 'Redis (Docker)', 'Google Cloud API', 'GreenAPI'],
      githubUrl: 'https://github.com/Roberto96Dev/pigroai',
      highlight: 'Containerizzazione con Docker e integrazione sicura tramite Google Cloud OAuth2.',
      isWip: true,
      image: 'https://placehold.co/600x400/0f172a/00ffcc?text=PigroBot'
    },
    {
      title: 'CarbonOil',
      subtitle: 'Fuel Management System',
      description: 'Piattaforma full-stack per la gestione di distributori di carburante con dashboard admin.',
      stack: ['Spring Boot', 'Angular', 'PostgreSQL'],
      githubUrl: 'https://github.com/Roberto96Dev/Carbon-Oil',
      highlight: 'Transazioni atomiche per il controllo delle cisterne in tempo reale.',
      image: 'https://placehold.co/600x400/0f172a/7c3aed?text=CarbonOil'
    },
    {
      title: 'Nadir',
      subtitle: 'Cyber Agenda PWA',
      description: 'Progressive Web App futuristica con estetica Cyberpunk per la gestione task.',
      stack: ['Vanilla JS', 'PWA', 'CSS Glassmorphism'],
      githubUrl: 'https://github.com/Roberto96Dev/Nadir-app',
      demoUrl: 'https://nadir-demo.vercel.app',
      highlight: 'Utilizzo di Notification API e LocalStorage per funzionamento offline.',
      image: 'https://placehold.co/600x400/0f172a/00ffcc?text=Nadir'
    },
    {
      title: 'SuonaconGigi',
      subtitle: 'Collaborative Music Platform',
      description: 'Progetto di gruppo del bootcamp focalizzato sulla sicurezza e collaborazione.',
      stack: ['Angular', 'Spring Boot', 'JWT'],
      githubUrl: 'https://github.com/Danix06/suonacongigi',
      highlight: 'Implementazione di autenticazione stateless con JWT e workflow Git di gruppo.',
      image: 'https://placehold.co/600x400/0f172a/7c3aed?text=SuonaconGigi'
    }
  ];

  getProjects() {
    return this.projects;
  }
}