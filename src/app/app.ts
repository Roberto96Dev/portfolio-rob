import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  projects: any[] = [];
  
  // Aggiungi queste righe per l'email:
  email = 'roberto_virnuccio@outlook.it';
  emailButtonText = "Invia un'Email";

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  // Aggiungi la funzione di copia qui dentro:
  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.emailButtonText = 'Email Copiata! ✅';
      
      setTimeout(() => {
        this.emailButtonText = "Invia un'Email";
      }, 2000);
    }).catch(err => {
      console.error('Errore durante la copia:', err);
    });
  }
}