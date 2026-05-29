export interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  highlight: string; 
  image: string;
  isWip?: boolean;
}